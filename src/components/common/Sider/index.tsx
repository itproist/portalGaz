import React from 'react';
import styles from './Sider.module.scss';

const Sider = () => {
  const [activeKey, setActiveKey] = React.useState(0);

  const categories = [
    'Поздразделение',
    'Сотрудники',
    'График работы',
    'Инструктажи',
    'Календарь',
    'Повышение квалификации',
    'Документы',
  ];

  return (
    <nav className={styles.aside}>
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => setActiveKey(i)}
            className={activeKey === i ? styles.active : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sider;
