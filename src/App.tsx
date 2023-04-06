import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthContainer from 'containers/AuthContainer';
import PageWrapper from 'components/common/PageWrapper';
import { CheckAuth } from 'HOC';
import MainContainer from 'containers/MainContainer';

function App() {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <CheckAuth>
              <MainContainer />
            </CheckAuth>
          }
        />
        <Route path="/auth" element={<AuthContainer />} />
        <Route path="/*" element={<h1>NOT FOUNT 404</h1>} />
      </Routes>
    </>
  );
}

export default App;
