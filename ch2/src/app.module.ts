import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { AppController } from './app.controller';

@Module({
  imports: [AdminModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
