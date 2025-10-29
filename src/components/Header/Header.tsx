import searchIcon from '../../assets/icons/search.svg';
import styles from './style.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_input}>
        <input type="text" />
        <img src={searchIcon} alt="search" />
      </div>
    </header>
  );
};
