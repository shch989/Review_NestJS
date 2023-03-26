import { Module } from '@nestjs/common';
import { ShopModule } from './shop/shop.module';
import { AdminModule } from './admin/admin.module';
import { AppController } from './app.controller';

@Module({
  imports: [ShopModule, AdminModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
