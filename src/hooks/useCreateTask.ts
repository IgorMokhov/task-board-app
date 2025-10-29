import { useCreateTaskMutation } from '../redux/api/tasks/tasks';
import type { ShortTask } from '../types/tasks';

export const useCreateTask = () => {
  const [createTask, { data, isSuccess, isLoading, isError, error }] =
    useCreateTaskMutation();

  const handleCreateTask = async (data: ShortTask) => {
    try {
      const result = await createTask(data).unwrap();
      return result;
    } catch (err) {
      console.error('Ошибка при создании заявки:', err);
      throw err;
    }
  };

  return {
    createTask: handleCreateTask,
    createdId: data,
    isSuccessCreate: isSuccess,
    isLoadingCreate: isLoading,
    isErrorCreate: isError,
    errorCreate: error,
  };
};
