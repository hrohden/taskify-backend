import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class StatusService {
  constructor(private readonly prisma: PrismaService) {}

  // Get all status
  getAllStatus() {
    return this.prisma.status.findMany();
  }
}
