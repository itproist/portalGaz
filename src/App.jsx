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
import Header from 'components/common/Header';
import SubdivisionContainer from 'containers/SubdivisionsContainer';
import EmployeesContainer from 'containers/EmployeesContainer';
import ScheduleContainer from 'containers/ScheduleContainer';
import BriefingsContainer from 'containers/BriefingsContainer';
import CalendarContainer from 'containers/CalendarContainer';
import TrainingContainer from 'containers/TrainingContainer';
import DocumentationContainer from 'containers/DocumentationContainer';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/registraion" element={<Registration />} />
        <Route path="/login" element={<AuthContainer />} />
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<MainContainer />} />
          <Route path="posts/:id" element={<FullPost />} />
          <Route path="posts/:id/edit" element={<AddPost />} />
          <Route path="add-post" element={<AddPost />} />
          <Route path="auth/me/:id" element={<ProfileContainer />} />
          <Route path="subdivisions" element={<SubdivisionContainer />} />
          <Route path="employees" element={<EmployeesContainer />} />
          <Route path="schedule" element={<ScheduleContainer />} />
          <Route path="briefings" element={<BriefingsContainer />} />
          <Route path="calendar" element={<CalendarContainer />} />
          <Route path="training" element={<TrainingContainer />} />
          <Route path="documentation" element={<DocumentationContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
