export type Task = {
  id: number;
  name: string;
  description: string;
  comment?: string;
  createdAt: string;
  updatedAt: string;
  price: number;
  taskTypeId: number;
  taskTypeName: string;
  statusId: number;
  statusName: string;
  statusRgb: string;
  priorityId: number;
  priorityName: string;
  serviceId: number;
  serviceName: string;
  resolutionDatePlan: string;
  initiatorId: number;
  initiatorName: string;
  executorId: number;
  executorName: string;
  executorGroupId: number;
  executorGroupName: string;
  tags: Tag[];
};

export type Tag = {
  id: number;
  name: string;
};

export type ShortTask = Pick<Task, 'name' | 'description'>;

export type UpdateTask = Pick<
  Task,
  'id' | 'statusId' | 'executorId'
> &
  Partial<Omit<Task, 'id' | 'statusId' | 'executorId'>>;

export type TaskResponse = {
  value: Task[];
};

export type ModalType = 'create' | 'edit';

export type ErrorResponse = {
  status: string;
  originalStatus: number;
  data: string;
  error: string;
};
