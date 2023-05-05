import MyCalendar from '../Calendar';
import styles from './Aside.module.scss';
import 'react-calendar/dist/Calendar.css';
import rek from '../../../assets/hEXqat5XmjQ-fotor-bg-remover-202305032344.png';

const Aside = () => {
  return (
    <aside className={styles.sider}>
      <MyCalendar />
      <img className={styles.img} src={rek} alt="" />
    </aside>
  );
};

export default Aside;
