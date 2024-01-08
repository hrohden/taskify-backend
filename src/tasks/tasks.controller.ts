import { Controller, Get } from '@nestjs/common';
import { Task } from './types/Task';
import { statusList } from './types/status';

@Controller('tasks')
export class TasksController {
  constructor() {}

  private tasks: Task[] = [
    {
      id: '1',
      status: statusList[1],
      title: 'Create Taskify application',
      description: 'Initial code to showcase some features.',
    },
    {
      id: '2',
      status: statusList[1],
      title: 'Create GitHub repository',
      description: 'Create repo and push code to it',
    },
  ];

  @Get()
  getAllTasks(): Task[] {
    return this.tasks;
  }
}
