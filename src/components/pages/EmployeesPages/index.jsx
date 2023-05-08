import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../../api/index.js';
import Users from 'components/common/Users/index.jsx';

const EmployeesPages = () => {
  const [data, setData] = useState();

  const isUsersLoading = status === 'loading';
  useEffect(() => {
    axios
      .get('/users')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <p>Поиск сотрудников</p>
      {(isUsersLoading ? [...Array(5)] : data)?.map((obj, index) =>
        isUsersLoading ? (
          <Users key={index._id} />
        ) : (
          <Users
            id={obj._id}
            avatarUrl={obj.avatarUrl}
            firstName={obj.firstName}
            lastName={obj.lastName}
            surname={obj.surname}
          />
        ),
      )}
    </div>
  );
};

export default EmployeesPages;
