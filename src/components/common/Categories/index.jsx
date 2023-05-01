import React from 'react';
import styles from './Categories.module.scss';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Профиль'];

  return (
    <nav className={styles.categories}>
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => setActiveIndex(i)}
            className={activeIndex === i ? styles.active : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
