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
  const [data, setData] = useState();
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
    <section>
      <div className={styles.block}>
        <div className={styles.news}>Новости</div>

        <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
          <input className={styles.search} type="search" placeholder="Поиск" name="search" />

          <button className={styles.search_button} type="submit" value="Search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="15px" height="15px">
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
            </svg>
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
