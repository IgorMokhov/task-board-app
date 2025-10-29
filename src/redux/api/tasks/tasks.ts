import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ShortTask, TaskResponse, UpdateTask } from '../../../types/tasks';

const BASE_URL = 'http://intravision-task.test01.intravision.ru/';
const ID = import.meta.env.VITE_TENANTGUID;

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Tasks'],

  endpoints: (builder) => ({
    getTasks: builder.query<TaskResponse, void>({
      query: () => `odata/tasks?tenantguid=${ID}`,
      providesTags: ['Tasks'],
    }),
    createTask: builder.mutation<number, ShortTask>({
      query: (data) => ({
        url: `api/${ID}/Tasks`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Tasks'],
    }),
    updateTask: builder.mutation<void, UpdateTask>({
      query: (data) => ({
        url: `/api/${ID}/Tasks`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const { useGetTasksQuery, useCreateTaskMutation, useUpdateTaskMutation } =
  tasksApi;
