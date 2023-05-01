import React, { useRef, useEffect } from 'react';
import styles from './ProfilePages.module.scss';
import { useSelector } from 'react-redux';
import Categories from '../../common/Categories';
import axios from '../../../api/index.js';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { firstName, lastName, surname, passport, avatarUrl, position, email, telephone, person } =
    useSelector((state) => state.auth.data);

  const [avatar, setAvatar] = React.useState('');
  const inputFileRef = useRef(null);

  const sendFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);

      const { data } = await axios.post('/upload', formData);

      setAvatar(data.url);
    } catch (err) {
      console.warn(err);
      alert('Ошибка при загрузке файла');
    }
  };

  return (
    <div className={styles.profile}>
      <Categories />

      {/* Можно еще доработать */}
      <div className={styles.profile_user}>
        <div className={styles.user_user}>
          <div>{lastName}</div>
          <div>{firstName}</div>
          <div>{surname}</div>
        </div>
      </div>

      <div>
        <img className={styles.profile_avatar} src={`${avatarUrl}`} alt="Uploaded" />
      </div>

      <button className={styles.button_repair} onClick={() => inputFileRef.current.click()}>
        Редактировать
      </button>
      <input ref={inputFileRef} type="file" onChange={sendFile} hidden />

      {/* Информация */}
      <div className={styles.info}>
        <div className={styles.information}>Информация</div>
        <div className={styles.info_info}>
          <p>
            Табельный номер <span className={styles.person_number}>{person[1]}</span>
          </p>
          <p>
            Должность <span className={styles.person_position}>{position[0]}</span>
          </p>
        </div>
      </div>

      {/* Паспортные данные */}
      <div className={styles.passport}>
        <div>
          <div className={styles.information}>Паспортные данные</div>
          <div className={styles.info_info_in}>
            <p>
              Cерия: <span className={styles.passport_series}>{passport[0]}</span>
            </p>
            <p>
              Номер: <span className={styles.passport_number}>{passport[1]}</span>
            </p>
            <p>
              Адрес проживания: <span className={styles.passport_adress}>{passport[2]}</span>
            </p>
            <p>
              Адрес регистрации: <span className={styles.passport_adress}>{passport[3]}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Персональные данные */}
      <div className={styles.person_info}>
        <div className={styles.person_date}>Персональные данные</div>
        <div className={styles.info_info_inn}>
          <p>
            Логин: <span className={styles.login}>{person[1]}</span>
          </p>
          <p>
            Email для уведомлений: <span className={styles.email}>{email}</span>
          </p>
          <p>
            Место работы: <span className={styles.work}>{person[0]}</span>
          </p>
        </div>
      </div>

      {/* Контактная информация */}
      <div className={styles.contacts_info}>
        <div className={styles.con_date}>Контактная информация</div>
        <div className={styles.info_info_innn}>
          <p className={styles.emailes}>
            <span className={styles.emal}>{email}</span>
          </p>
          <p className={styles.telephone}>
            <span className={styles.phone}>{telephone}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
