import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthContainer from 'containers/AuthContainer';
import PageWrapper from 'components/common/PageWrapper';
import MainContainer from 'containers/MainContainer';
import { FullPost } from 'components/common/FullPost';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth } from 'store/slice/users';
import { Registration } from 'components/pages/RegisterPages';
import { AddPost } from 'components/pages/AddPages';
import ProfileContainer from 'containers/ProfileContainer';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<MainContainer />} />
          <Route path="login" element={<AuthContainer />} />
          <Route path="posts/:id" element={<FullPost />} />
          <Route path="posts/:id/edit" element={<AddPost />} />
          <Route path="registraion" element={<Registration />} />
          <Route path="add-post" element={<AddPost />} />
          <Route path="profile" element={<ProfileContainer />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
