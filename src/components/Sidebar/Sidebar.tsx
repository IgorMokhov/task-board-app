import logoIcon from '../../assets/icons/logo.svg';
import { NavList } from '../NavList/NavList';
import styles from './style.module.css';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.sidebar_logo} src={logoIcon} alt="logo" />
      <NavList />
    </aside>
  );
};
