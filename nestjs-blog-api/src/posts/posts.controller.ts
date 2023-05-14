import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostType } from './types/posts';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Post()
  createPost(@Body() post: PostType): void {
    return this.postsService.createPost(post);
  }
}
