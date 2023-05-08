import styles from './Users.module.scss';

const Users = ({ id, avatarUrl, firstName, lastName, surname }) => {
  return (
    <div className={styles.kevteme}>
      <img className={styles.imgimg} src={avatarUrl} alt="" />
      <div className={styles.people}>
        <p>{lastName}</p>
        <p>{firstName}</p>
        <p>{surname}</p>
      </div>
    </div>
  );
};

export default Users;
