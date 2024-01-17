import { Module } from '@nestjs/common';
import { DataLogsService } from './data.logs.service';
import { DataLogsController } from './data.logs.controller';
import { SharedModule } from '../shared/schema';

@Module({
  imports: [SharedModule],
  controllers: [DataLogsController],
  providers: [DataLogsService],
  exports: [DataLogsService],
})
export class DataLogsModule {}
