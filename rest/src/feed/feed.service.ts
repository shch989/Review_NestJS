import {
  Body,
  HttpException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { FeedPostDto } from './dtos/feedpost.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/schemas/feed.schema';

@Injectable()
export class FeedService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}
  async getPosts(currentPage: number, perPage: number) {
    try {
      const totalItems = await this.postModel.find().countDocuments();
      const posts = await this.postModel
        .find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage);

      return {
        message: 'Fetched posts successfully.',
        posts: posts,
        totalItems: totalItems,
      };
    } catch (err) {
      if (!err.statusCode) {
        throw new HttpException(err, 500);
      }
      throw new HttpException(err, err.statusCode);
    }
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
      post: post,
    };
  }

  async getPost(postId: string) {
    let post;
    try {
      post = await this.postModel.findById(postId).exec();
    } catch (err) {
      throw new NotFoundException('Could not find post.');
    }
    if (!post) {
      throw new NotFoundException('Could not find post.');
    }

    return { message: 'Post fetched.', post: post };
  }
}
