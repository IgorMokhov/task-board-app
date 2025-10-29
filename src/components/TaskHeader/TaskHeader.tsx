import closeIcon from '../../assets/icons/close.svg';
import type { ModalType } from '../../types/tasks';
import styles from './style.module.css';

type TaskHeaderProps = {
  type: ModalType;
  onClose: () => void;
  id?: number;
  title?: string;
};

export const TaskHeader = ({ id, title, type, onClose }: TaskHeaderProps) => {
  return (
    <div className={styles.header}>
      {type === 'create' && <p>Новая заявка</p>}
      {type === 'edit' && (
        <div>
          <p>№{id}</p>
          <p>{title}</p>
        </div>
      )}
      <button onClick={onClose}>
        <img src={closeIcon} alt="close" />
      </button>
    </div>
  );
};
