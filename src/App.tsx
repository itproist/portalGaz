import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from './components/pages/MainPages';
import AuthContainer from './containers/AuthContainer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<h1>Основная часть</h1>}/>
          <Route path="auth" element={<AuthContainer />} />
          <Route path="*" element={<h1>Страница не найдена!</h1>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
