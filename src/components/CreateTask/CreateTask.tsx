import { useState } from 'react';
import { TaskHeader } from '../TaskHeader/TaskHeader';
import { Button } from '../../UI/Button/Button';
import type { ShortTask } from '../../types/tasks';
import styles from './style.module.css';

type CreateTaskProps = {
  onCreate: (task: ShortTask) => void;
  onClose: () => void;
  isLoading: boolean;
};

export const CreateTask = ({ onCreate, onClose, isLoading }: CreateTaskProps) => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      onCreate({ name, description });
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeTitleHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setName(e.target.value);
  };

  const onChangeDescrHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  return (
    <div className={styles.create}>
      <TaskHeader onClose={onClose} type="create" />
      <form onSubmit={onSubmitHandler}>
        <label>
          Название
          <textarea
            className={styles.create_title}
            value={name}
            onChange={onChangeTitleHandler}
          />
        </label>
        <label>
          Описание
          <textarea
            className={styles.create_description}
            value={description}
            onChange={onChangeDescrHandler}
          />
        </label>
        <Button
          text="Сохранить"
          type="submit"
          isLoading={isLoading}
          disabled={!name || !description}
        />
      </form>
    </div>
  );
};
