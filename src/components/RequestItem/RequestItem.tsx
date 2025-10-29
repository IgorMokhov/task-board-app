import type { Task } from '../../types/tasks';
import styles from './style.module.css';

type RequestItemProps = Task & {
  onSelect: (task: Task) => void;
};

export const RequestItem = ({
  id,
  name,
  statusName,
  statusRgb,
  initiatorName,
  onSelect,
  ...rest
}: RequestItemProps) => {
  const formattedNumber = id.toLocaleString('ru-RU');

  const onClickHandler = () => {
    onSelect({ id, name, statusName, statusRgb, initiatorName, ...rest });
  };

  return (
    <li className={styles.requestitem} onClick={onClickHandler}>
      <span>{formattedNumber}</span>
      <span className={styles.requestitem_title}> {name}</span>
      <span
        className={styles.requestitem_status}
        style={{ backgroundColor: `${statusRgb}` }}
      >
        {statusName}
      </span>
      <span>{initiatorName}</span>
    </li>
  );
};
