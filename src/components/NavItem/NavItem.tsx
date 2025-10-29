import { NavLink } from 'react-router-dom';
import styles from './style.module.css';

type NavItemProps = {
  icon: string;
  label: string;
  path: string;
};

export const NavItem = ({ icon, label, path }: NavItemProps) => {
  return (
    <li className={styles.navitem}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : '')}
        to={path}
      >
        <img src={icon} alt={icon} />
        <p className={styles.navitem_text}>{label}</p>
      </NavLink>
    </li>
  );
};
