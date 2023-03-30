import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { AppController } from './app.controller';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [AdminModule, ProductsModule, CartModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
