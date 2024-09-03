import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerService} from "../power/power.service";

@Module({
  imports: [PowerService],
  providers: [DiskService]
})
export class DiskModule {}
