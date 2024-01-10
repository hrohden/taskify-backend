import { Status } from './status';

export interface Task {
  id: number;
  title: string;
  description?: string;
  status?: Status;
  statusId: number;
}
