import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}
  create(task: Task) {
    return this.prisma.task.create({ data: task });
  }

  async findAll() {
    return await this.prisma.task.findMany({
      include: {
        status: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, task: Task) {
    return this.prisma.task.update({ where: { id }, data: task });
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
