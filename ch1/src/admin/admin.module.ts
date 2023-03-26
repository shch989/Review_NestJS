import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  controllers: [AdminController],
  exports: [AdminService],
  providers: [AdminService]
})
export class AdminModule {}
