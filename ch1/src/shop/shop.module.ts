import { Module } from '@nestjs/common';
import { AdminModule } from 'src/admin/admin.module';
import { ShopController } from './shop.controller';

@Module({
  imports: [AdminModule],
  controllers: [ShopController]
})
export class ShopModule {}
