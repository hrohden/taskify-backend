import { Injectable } from '@nestjs/common';
import { Status } from './types/status';

@Injectable()
export class StatusService {
  private statusList: Status[] = [
    { id: 1, description: 'Pending' },
    { id: 2, description: 'Running' },
    { id: 3, description: 'Blocked' },
    { id: 4, description: 'Completed' },
  ];

  // Get all status
  getAllStatus(): Status[] {
    return this.statusList;
  }
}
