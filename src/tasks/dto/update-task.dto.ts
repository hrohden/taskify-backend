import { PartialType } from '@nestjs/mapped-types';
import { TaskEntity } from '../entities/task.entity';

export class UpdateTaskDto extends PartialType(TaskEntity) {}
