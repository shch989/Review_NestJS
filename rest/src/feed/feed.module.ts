import { BadRequestException, Module } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';
import { Post, PostSchema } from 'src/schemas/feed.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
      fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/png') {
          cb(null, true);
        } else {
          cb(new BadRequestException('png 파일만 업로드 가능합니다'), false);
        }
      },
    }),
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  ],
  controllers: [FeedController],
  providers: [FeedService],
})
export class FeedModule {}
