import { Body, Injectable } from '@nestjs/common';
import { FeedPostDto } from './dtos/feedpost.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/schemas/feed.schema';

@Injectable()
export class FeedService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}
  getPosts(): FeedPostDto[] {
    const posts = [
      {
        _id: '1',
        title: 'First Post',
        content: 'This is the first post!',
        imageUrl: 'images/duck.jpg',
        creator: {
          name: 'Semi',
        },
        createdAt: new Date(),
      },
    ];
    return posts;
  }

  createPost(@Body() feedPostDto: FeedPostDto) {
    const { title, content } = feedPostDto;
    const post = new this.postModel({
      title,
      content,
      imageUrl: 'images/nestjs.jpg',
      creator: { name: 'Semi' },
    });
    post.save();
    return {
      message: 'Post created successfully!',
      // post: post.readOnlyData
      post: post
    };
  }
}
