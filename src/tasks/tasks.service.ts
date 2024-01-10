import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { StatusService } from './status.service';
import { Task } from './types/Task';
import { UpdateTaskStatus } from './types/update-task-status';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 1,
      status: { id: 1, description: 'Pending' },
      title: 'Create Taskify application',
      description: 'Initial code to showcase some features.',
      statusId: 1,
    },
    {
      id: 2,
      status: { id: 1, description: 'Pending' },
      title: 'Create GitHub repository',
      description: 'Create repo and push code to it',
      statusId: 1,
    },
  ];

  constructor(
    private statusService: StatusService,
    private prismaService: PrismaService,
  ) {}

  // Get all tasks
  async getAllTasks(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TaskWhereUniqueInput;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput;
  }): Promise<Task[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prismaService.task.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
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
