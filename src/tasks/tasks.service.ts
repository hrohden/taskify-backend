import { Injectable } from '@nestjs/common';
import { StatusService } from './status.service';
import { Task } from './types/Task';
import { UpdateTaskStatus } from './types/update-task-status';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      status: { id: 1, description: 'Pending' },
      title: 'Create Taskify application',
      description: 'Initial code to showcase some features.',
    },
    {
      id: '2',
      status: { id: 1, description: 'Pending' },
      title: 'Create GitHub repository',
      description: 'Create repo and push code to it',
    },
  ];

  constructor(private statusService: StatusService) {}

  // Get all tasks
  getAllTasks(): Task[] {
    return this.tasks;
  }

  // Update task status based on id and status
  updateTaskStatus(data: UpdateTaskStatus): Task {
    const task = this.tasks.find((task) => task.id === data.id);
    const status = this.statusService
      .getAllStatus()
      .find((status) => status.id === data.statusId);
    task.status = status;
    return task;
  }
}
