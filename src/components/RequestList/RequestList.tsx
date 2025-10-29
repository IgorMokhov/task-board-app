import type { Task } from '../../types/tasks';
import { RequestItem } from '../RequestItem/RequestItem';
import styles from './style.module.css';

type RequestListProps = {
  tasks: Task[];
  onSelect: (task: Task) => void;
};

export const RequestList = ({ tasks, onSelect }: RequestListProps) => {
  return (
    <ul className={styles.requestlist}>
      {tasks?.map((task) => (
        <RequestItem key={task.id} {...task} onSelect={onSelect} />
      ))}
    </ul>
  );
};
