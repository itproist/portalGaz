import React from 'react';
import styles from './Sider.module.scss';
import { Link } from 'react-router-dom';

const Sider = () => {
  const [activeKey, setActiveKey] = React.useState(0);

  const categories = [
    { id: 1, title: 'Поздразделение', to: '/subdivisions' },

    { id: 2, title: 'График работы', to: '/schedule' },
    { id: 3, title: 'Инструктажи', to: '/briefings' },
    { id: 4, title: 'Календарь', to: '/calendar' },
    { id: 5, title: 'Повышение квалификации', to: '/training' },
    { id: 6, title: 'Документы', to: '/documentation' },
  ];

  return (
    <nav className={styles.aside}>
      <ul>
        {categories.map((posts) => (
          <li
            key={posts.id}
            onClick={() => setActiveKey(posts.id)}
            className={activeKey === posts.id ? styles.active : ''}
          >
            <Link to={posts.to}>{posts.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sider;
