import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from 'store/slice/users/index.ts';

const EmployeesPages = () => {
  const dispatch = useDispatch();
  console.log(fetchUser());

  // useEffect(() => {
  //   dispatch(fetchUser());
  // }, []);

  const user = useSelector((state) => state.auth.data);

  console.log(user);

  return (
    <div>
      <p>Поиск сотрудников</p>
    </div>
  );
};

export default EmployeesPages;
