import { Injectable } from '@nestjs/common';
import { Task } from './types/Task';
import { UpdateTaskStatus } from './types/update-task-status';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      status: 0,
      title: 'Create Taskify application',
      description: 'Initial code to showcase some features.',
    },
    {
      id: '2',
      status: 0,
      title: 'Create GitHub repository',
      description: 'Create repo and push code to it',
    },
  ];

  // Get all tasks
  getAllTasks(): Task[] {
    return this.tasks;
  }

  // Update task status based on id and status
  updateTaskStatus(data: UpdateTaskStatus): Task {
    const task = this.tasks.find((task) => task.id === data.id);
    task.status = data.statusId;
    return task;
  }
}
