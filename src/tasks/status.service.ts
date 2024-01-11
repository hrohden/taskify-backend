import { Injectable } from '@nestjs/common';
import { StatusEntity } from './entities/status.entity';

@Injectable()
export class StatusService {
  private statusList: StatusEntity[] = [
    { id: 1, description: 'Pending' },
    { id: 2, description: 'Running' },
    { id: 3, description: 'Blocked' },
    { id: 4, description: 'Completed' },
  ];

  // Get all status
  getAllStatus() {
    return this.statusList;
  }
}
