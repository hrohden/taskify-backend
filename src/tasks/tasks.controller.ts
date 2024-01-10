import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './types/Task';
import { UpdateTaskStatus } from './types/update-task-status';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return await this.taskService.getAllTasks({});
  }

  @Post('/:id')
  updateTaskStatus(@Body() data: UpdateTaskStatus): Task {
    return this.taskService.updateTaskStatus(data);
  }
}
