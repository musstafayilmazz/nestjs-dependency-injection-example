import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule} from "../power/power.module";

@Module({
  imports: [PowerModule],
  exports: [CpuService],
  providers: [CpuService]
})
export class CpuModule {}
