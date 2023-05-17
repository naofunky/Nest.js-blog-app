import { Injectable } from '@nestjs/common';
import { PostType } from './types/posts';

@Injectable()
export class PostsService {
  private readonly posts: PostType[] = [];

  findAll(): PostType[] {
    return this.posts;
  }

  createPost(post: PostType) {
    // const copyPost = [...this.posts];
    // console.log(copyPost);
    // copyPost.push(post);
    this.posts.push(post);
  }

  findById(id: string): PostType {
    return this.posts.find((post) => post.id === id);
  }
}
