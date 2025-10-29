import { useEffect, useState } from 'react';
import type { Task } from '../../types/tasks';
import { TaskHeader } from '../TaskHeader/TaskHeader';
import { Button } from '../../UI/Button/Button';
import { extractText } from '../../utils/utils';
import { useUpdateTask } from '../../hooks/useUpdateTask';
import styles from './style.module.css';

type EditTaskProps = {
  task: Task | null;
  onClose: () => void;
};

export const EditTask = ({ task, onClose }: EditTaskProps) => {
  const [comment, setComment] = useState<string>('');
  const { updateTask, isLoadingUpdate } = useUpdateTask();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task) return;

    try {
      const body = {
        id: task?.id,
        statusId: task?.statusId,
        executorId: task?.executorId,
        comment,
      };
      updateTask(body);
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    setComment('');
  }, [task?.id]);

  return (
    <div className={styles.edit}>
      <TaskHeader id={task?.id} title={task?.name} onClose={onClose} type="edit" />
      <div className={styles.edit_content}>
        <div className={styles.edit_comments}>
          <h6>Описание</h6>
          <p>{extractText(task?.description)}</p>
          <form onSubmit={onSubmitHandler}>
            <input
              type="text"
              placeholder="Добавление коментариев"
              value={comment}
              onChange={onChangeHandler}
            />
            <Button
              text="Сохранить"
              type="submit"
              disabled={isLoadingUpdate}
              isLoading={isLoadingUpdate}
            />
          </form>
        </div>
        <div className={styles.edit_info}></div>
      </div>
    </div>
  );
};
