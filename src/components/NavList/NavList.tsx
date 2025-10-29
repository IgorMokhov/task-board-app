import knowledgeIcon from '../../assets/icons/knowledge.svg';
import requestsIcon from '../../assets/icons/requests.svg';
import employeesIcon from '../../assets/icons/employees.svg';
import clientsIcon from '../../assets/icons/clients.svg';
import analyticsIcon from '../../assets/icons/analytics.svg';
import settingsIcon from '../../assets/icons/settings.svg';
import styles from './style.module.css';
import { NavItem } from '../NavItem/NavItem';

const navLinks = [
  { path: '/knowledge-base', label: 'База знаний', icon: knowledgeIcon },
  { path: '/requests', label: 'Заявки', icon: requestsIcon },
  { path: '/employees', label: 'Сотрудники', icon: employeesIcon },
  { path: '/clients', label: 'Клиенты', icon: clientsIcon },
  { path: '/analytics', label: 'Активы', icon: analyticsIcon },
  { path: '/settings', label: 'Настройки', icon: settingsIcon },
];

export const NavList = () => {
  return (
    <nav className={styles.navlist}>
      <ul>
        {navLinks.map((link) => (
          <NavItem {...link} key={link.path} />
        ))}
      </ul>
    </nav>
  );
};
