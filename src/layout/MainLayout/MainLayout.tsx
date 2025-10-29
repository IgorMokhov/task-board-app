import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import styles from './style.module.css';

export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.layout_content}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
