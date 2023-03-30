import { Module } from '@nestjs/common';
import { AdminModule } from 'src/admin/admin.module';
import { CartController } from './cart.controller';
import { CartRepository } from './cart.repository';

@Module({
  imports: [AdminModule],
  controllers: [CartController],
  providers: [CartRepository]
})
export class CartModule {}
