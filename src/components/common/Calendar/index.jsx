import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styles from './Calendar.module.scss';

const MyCalendar = () => {
  const [value, setValue] = useState < Date > new Date();

  const onChange = (date) => {
    setValue(date);
  };

  return (
    <div className={styles.calendar}>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default MyCalendar;
