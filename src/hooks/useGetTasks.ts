import { useGetTasksQuery } from '../redux/api/tasks/tasks';

export const useGetTasks = () => {
  const { data, isLoading, isError, error } = useGetTasksQuery();

  const tasks = data?.value ?? [];

  return {
    tasks,
    isLoadingGetTasks: isLoading,
    isErrorGetTasks: isError,
    errorGetTasks: error,
  };
};
