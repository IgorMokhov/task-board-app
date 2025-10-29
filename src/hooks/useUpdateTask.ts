import { useUpdateTaskMutation } from '../redux/api/tasks/tasks';
import type { UpdateTask } from '../types/tasks';

export const useUpdateTask = () => {
  const [updateTask, { isSuccess, isLoading, isError, error }] =
    useUpdateTaskMutation();

  const handleUpdateTask = async (data: UpdateTask) => {
    try {
      const result = await updateTask(data).unwrap();
      return result;
    } catch (err) {
      console.error('Ошибка при изменении заявки:', err);
      throw err;
    }
  };

  return {
    updateTask: handleUpdateTask,
    isSuccessUpdate: isSuccess,
    isLoadingUpdate: isLoading,
    isErrorUpdate: isError,
    errorUpdate: error,
  };
};
