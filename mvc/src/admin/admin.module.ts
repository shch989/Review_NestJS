import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminRepository } from './admin.repository';

@Module({
  controllers: [AdminController],
  exports: [AdminRepository],
  providers: [AdminRepository]
})
export class AdminModule {}
