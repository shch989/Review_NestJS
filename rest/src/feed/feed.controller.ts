import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedPostDto } from './dtos/feedpost.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('feed')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get('posts')
  async getPosts(
    @Query('page') page: number = 1,
    @Query('perPage') perPage: number = 2,
  ) {
    const result = await this.feedService.getPosts(page, perPage);
    return result;
  }

  @Post('post')
  @UseInterceptors(FileInterceptor('imageUrl'))
  createPost(
    @Body() feedPostDto: FeedPostDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    // return this.feedService.createPost(feedPostDto);
    const result = {
      title: feedPostDto.title,
      content: feedPostDto.content,
      imageUrl: file,
    };
    console.log(result)
  }

  @Get('/post/:postId')
  async getPost(@Param('postId') postId) {
    const result = await this.feedService.getPost(postId);
    return result;
  }
}
