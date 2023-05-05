import React, { useEffect, useMemo, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import styles from './AddPages.module.scss';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'store/slice/users';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from '../../../api/index';

export const AddPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const [isLoading, setLoading] = React.useState(false);
  const [text, setText] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [tags, setTags] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const [pdfUrl, setPdfUrl] = React.useState('');
  const inputFileRef = useRef(null);

  const isEditing = Boolean(id);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();

      const file = event.target.files[0];
      formData.append('image', file);

      const { data } = await axios.post('/upload', formData);

      setImageUrl(data.url);
    } catch (err) {
      console.warn(err);
      alert('Ошибка при загрузке файла');
    }
  };

  const onClickRemoveImage = () => {
    setImageUrl('');
  };

  const onChange = React.useCallback((value) => {
    setText(value);
  }, []);

  useEffect(() => {
    if (id) {
      axios.get(`/posts/${id}`).then(({ data }) => {
        setTitle(data.title);
        setText(data.text);
        setImageUrl(data.imageUrl);
        setTags(data.tags.join(','));
      });
    }
  }, []);

  const onSubmit = async () => {
    try {
      setLoading(true);
      const fields = {
        title,
        imageUrl,
        text,
        tags,
      };
      const { data } = isEditing
        ? await axios.patch(`/posts/${id}`, fields)
        : await axios.post('/posts', fields);

      const _id = isEditing ? id : data._id;
      navigate(`/posts/${_id}`);
    } catch (err) {
      console.warn(err);
      alert('Ошибка при создания статьи!');
    }
  };

  if (!window.localStorage.getItem('token') && !isAuth) {
    return <Navigate to="/" />;
  }

  const options = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
      maxHeight: '200px',
      placeholder: 'Введите текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    };
  }, []);

  return (
    <div className={styles.writeNews}>
      <Paper>
        <Button
          className={styles.download}
          onClick={() => inputFileRef.current.click()}
          variant="outlined"
          size="large"
        >
          Загрузить превью
        </Button>
        <input ref={inputFileRef} type="file" onChange={handleChangeFile} accept=".pdf" hidden />
        {imageUrl && (
          <>
            <Button
              className={styles.writeNewsButtonDelete}
              variant="contained"
              color="error"
              onClick={onClickRemoveImage}
            >
              Удалить
            </Button>
            <img
              className={styles.writeNewsImg}
              src={`http://localhost:5000${imageUrl}`}
              alt="Uploaded"
            />
          </>
        )}

        <br />
        <br />
        <TextField
          className={styles.writeNews_text}
          variant="standard"
          placeholder="Заголовок статьи..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          className={styles.writeNews_text}
          variant="standard"
          placeholder="Тэги"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <SimpleMDE
          className={styles.writeNews_simple}
          value={text}
          onChange={onChange}
          options={options}
        />
        <div className={styles.writeNews_button}>
          <Button onClick={onSubmit} size="large" variant="contained">
            {isEditing ? 'Сохранить' : 'Опубликовать'}
          </Button>
          <Link className={styles.writeNews_otmena} to="/">
            <Button size="large">Отмена</Button>
          </Link>
        </div>
      </Paper>
    </div>
  );
};
