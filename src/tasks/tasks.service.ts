import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}
  create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({ data: createTaskDto });
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

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
      include: { status: true },
    });
  }

  remove(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
}
