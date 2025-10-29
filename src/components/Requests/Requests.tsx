import { useEffect, useMemo, useState } from 'react';
import { RequestList } from '../RequestList/RequestList';
import { RequestsHeader } from '../RequestsHeader/RequestsHeader';
import type { ModalType, Task } from '../../types/tasks';
import { Modal } from '../../UI/Modal/Modal';
import { CreateTask } from '../CreateTask/CreateTask';
import { EditTask } from '../EditTask/EditTask';
import { Button } from '../../UI/Button/Button';
import { useGetTasks } from '../../hooks/useGetTasks';
import { useCreateTask } from '../../hooks/useCreateTask';
import styles from './style.module.css';

export const Requests = () => {
  const { tasks, isLoadingGetTasks } = useGetTasks();
  const { createTask, createdId, isSuccessCreate, isLoadingCreate } =
    useCreateTask();

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const createdTask = useMemo(
    () => tasks.find(({ id }) => id === createdId),
    [createdId, tasks]
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType | null>(null);

  const onOpenCreateHandler = () => {
    setIsOpen(true);
    setModalType('create');
  };

  const onCloseHandler = () => {
    setIsOpen(false);
    setModalType(null);
    setSelectedTask(null);
  };

  const onSelectHandler = (task: Task) => {
    setSelectedTask(task);
    setIsOpen(true);
    setModalType('edit');
  };

  useEffect(() => {
    if (isSuccessCreate && createdTask) {
      onSelectHandler(createdTask);
    }
  }, [isSuccessCreate, createdTask]);

  if (isLoadingGetTasks) {
    return <p className={styles.requests_loading}>Загрузка заявок...</p>;
  }

  return (
    <section className={styles.requests}>
      <div className={styles.requests_create}>
        <Button text="Создать заявку" size="md" onClick={onOpenCreateHandler} />
      </div>

      <RequestsHeader />
      <RequestList tasks={tasks} onSelect={onSelectHandler} />

      <Modal isOpen={isOpen}>
        {modalType === 'create' && (
          <CreateTask
            onCreate={createTask}
            onClose={onCloseHandler}
            isLoading={isLoadingCreate}
          />
        )}
        {modalType === 'edit' && (
          <EditTask task={selectedTask} onClose={onCloseHandler} />
        )}
      </Modal>
    </section>
  );
};
