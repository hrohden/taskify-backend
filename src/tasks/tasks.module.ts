import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController, StatusController],
  providers: [TasksService, StatusService, PrismaService],
})
export class TasksModule {}
