import { Body, Controller, Get, Post } from '@nestjs/common';
import { FeedService } from './feed.service';
import { GetPostsDto } from './dtos/getposts.dto';

@Controller('feed')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get('posts')
  getPosts(): GetPostsDto[] {
    return this.feedService.getPosts()
  }

  @Post('post')
  createPost(@Body() post: GetPostsDto) {
    return this.feedService.createPost(post)
  }
}
