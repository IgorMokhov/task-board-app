import styles from './style.module.css';

export const RequestsHeader = () => {
  return (
    <div className={styles.requests_header}>
      <div>ID</div>
      <div>Название</div>
      <div>Статус</div>
      <div>Исполнитель</div>
    </div>
  );
};
