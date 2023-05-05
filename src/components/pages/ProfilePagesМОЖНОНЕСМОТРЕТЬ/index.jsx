// import React, { useEffect, useState } from 'react';
// import axios from '../../../api/index.js';
// import { useParams } from 'react-router-dom';
// import { Profile } from '../../common/Profile';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAuthMe } from 'store/slice/users';

// const ProfileUser = () => {
//   const [data, setData] = useState();
//   const { id } = useParams();

//  useEffect(() => {
//   axios
//     .get(`/auth/me/${id}`)
//    .then((res) => {
//    setData(res.data);
//   })
//   .catch((err) => {
//      console.warn(err);
//    });
// }, [id]);

//   useEffect(() => {
//     axios
//       .get(`/auth/me/${id}`)
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, [id]);

//   console.log(data);

//   return (
//     <>
//       {/* {userInfo.map((obj, index) => {
//         <Profile
//           id={obj._id}
//           firstName={obj.firstName}
//           lastName={obj.lastName}
//           surname={obj.surname}
//           passport={obj.passport}
//           avatarUrl={`http://localhost:5000${obj.avatarUrl}`}
//           position={obj.position}
//           email={obj.email}
//           telephone={obj.telephone}
//           person={obj.person}
//         />;
//       })} */}

//       <Profile
//         id={data.id}
//         firstName={data.firstName}
//         lastName={data.lastName}
//         surname={data.surname}
//         passport={data.passport}
//         avatarUrl={`http://localhost:5000${data.avatarUrl}`}
//         position={data.position}
//         email={data.email}
//         telephone={data.telephone}
//         person={data.person}
//       />
//     </>
//   );
// };

// export default ProfileUser;

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
// import { Document, Page } from 'react-pdf';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

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

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  return (
    // <section>
    //   <div className={styles.block}>
    //     <div className={styles.news}>Новости</div>

    //     <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
    //       <input className={styles.search} type="search" placeholder="Поиск" name="search" />

    //       <button className={styles.search_button} type="submit" value="Search">
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="15px" height="15px">
    //           <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
    //         </svg>
    //       </button>
    //     </form>

    //     <div className={styles.posts}>
    //       {(isPostsLoading ? [...Array(5)] : posts.items)
    //         .filter((posts) => posts.title.includes(postQuery))
    //         .map((obj, index) =>
    //           isPostsLoading ? (
    //             <Post key={index} isLoading={true} />
    //           ) : (
    //             <Post
    //               id={obj._id}
    //               title={obj.title}
    //               imageUrl={`http://localhost:5000${obj.imageUrl}`}
    //               user={obj.user}
    //               createdAt={obj.createdAt}
    //               viewsCount={obj.viewsCount}
    //               tags={obj.tags}
    //               isEditable={userData?._id === obj.user._id}
    //             />
    //           ),
    //         )}
    //     </div>
    //   </div>
    // </section>

    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};

export default MainPages;
