import PageWrapper from 'components/common/PageWrapper';
import React, { useEffect, useState } from 'react';
import axios from '../../../api/index';
import { Post } from 'components/common/Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchTags } from 'store/slice/posts';
import { useSearchParams, Link } from 'react-router-dom';
import { AppDispatch } from 'store/store';
import Sider from 'components/common/Sider';
import styles from './MainPages.module.scss';

const MainPages = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const userData = useSelector((state) => state.auth.data);
  const [searchParams, setSearchParams] = useSearchParams();

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const postQuery = searchParams.get('post') || '';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    setSearchParams({ post: query });
  };

  const isPostsLoading = posts.status === 'loading';
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.block}>
        <div className={styles.news}>Новости</div>

        <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
          <input className={styles.search} type="search" placeholder="Поиск" name="search" />

          <button className={styles.search_button} type="submit" value="Search">
            Найти
          </button>
        </form>

        <div className={styles.posts}>
          {(isPostsLoading ? [...Array(5)] : posts.items)
            .filter((posts) => posts.title.includes(postQuery))
            .map((obj, index) =>
              isPostsLoading ? (
                <Post key={index} isLoading={true} />
              ) : (
                <Post
                  id={obj._id}
                  title={obj.title}
                  imageUrl={`http://localhost:5000${obj.imageUrl}`}
                  user={obj.user}
                  createdAt={obj.createdAt}
                  viewsCount={obj.viewsCount}
                  tags={obj.tags}
                  isEditable={userData?._id === obj.user._id}
                />
              ),
            )}
        </div>
      </div>
    </section>
  );
};

export default MainPages;
