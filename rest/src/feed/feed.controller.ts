import { Body, Controller, Get, Post } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedPostDto } from './dtos/feedpost.dto';

@Controller('feed')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get('posts')
  getPosts(): FeedPostDto[] {
    return this.feedService.getPosts()
  }

  @Post('post')
  createPost(@Body() post: FeedPostDto) {
    return this.feedService.createPost(post)
  }
}
