import { Body, Injectable } from '@nestjs/common';
import { GetPostsDto } from './dtos/getposts.dto';

@Injectable()
export class FeedService {
  getPosts(): GetPostsDto[] {
    const posts = [{ title: 'First Post', content: 'This is the first post!' }];
    return posts;
  }

  createPost(@Body() post: GetPostsDto) {
    const id = new Date().toISOString();
    return {
      message: 'Post created successfully!',
      post: { id: id, title: post.title, content: post.content },
    };
  }
}
