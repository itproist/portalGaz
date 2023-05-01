/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react';
import { Post } from '../Post';
import axios from '../../../api/index';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export const FullPost = () => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получение статьи');
      });
  }, []);

  if (isLoading) {
    return <Post isLoading={isLoading} isFullPost />;
  }

  return (
    <>
      <Post
        id={data._id}
        title={data.title}
        imageUrl={`http://localhost:5000${data.imageUrl}`}
        // imageUrl={`http:/localhost:5000${data.imageUrl}`}
        user={data.user}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        tags={data.tags}
        isFullPost
      >
        {/* <ReactMarkdown children={data.text} /> */}
        {/* <p>{data.text}</p> */}
        {/* <ReactMarkdown children={data.text} /> */}
        <ReactMarkdown children={data.text} />
      </Post>
    </>
  );
};
