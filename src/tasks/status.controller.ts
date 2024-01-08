import { Controller, Get } from '@nestjs/common';
import { StatusService } from './status.service';
import { Status } from './types/status';

@Controller('status')
export class StatusController {
  constructor(private statusService: StatusService) {}

  @Get()
  getAllStatus(): Status[] {
    return this.statusService.getAllStatus();
  }
}
