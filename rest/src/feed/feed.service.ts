import { Body, Injectable } from '@nestjs/common';
import { FeedPostDto } from './dtos/feedpost.dto';

@Injectable()
export class FeedService {
  getPosts(): FeedPostDto[] {
    const posts = [{ title: 'First Post', content: 'This is the first post!' }];
    return posts;
  }

  createPost(@Body() post: FeedPostDto) {
    const id = new Date().toISOString();
    const { title, content } = post;
    return {
      message: 'Post created successfully!',
      post: { id, title, content },
    };
  }
}
