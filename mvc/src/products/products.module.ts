import { Module } from '@nestjs/common';
import { AdminModule } from 'src/admin/admin.module';
import { ProductsController } from './products.controller';

@Module({
  imports: [AdminModule],
  controllers: [ProductsController]
})
export class ProductsModule {}
