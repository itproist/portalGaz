import PageWrapper from 'components/common/PageWrapper';
import React, { useEffect } from 'react';
import axios from '../../../api/index';
import { Post } from 'components/common/Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchTags } from 'store/slice/posts';
import { AppDispatch } from 'store/store';
import Sider from 'components/common/Sider';
import styles from './MainPages.module.scss';

const MainPages = () => {
  const dispatch = useDispatch();
  const { posts, tags } = useSelector((state) => state.posts);
  const userData = useSelector((state) => state.auth.data);

  const isPostsLoading = posts.status === 'loading';
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, []);

  return (
    <section>
      <Sider />
      {/* <span className={styles.news}>Новости</span>
      {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) =>
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
      )} */}
    </section>
  );
};

export default MainPages;
