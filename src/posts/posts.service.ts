import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(createPostInput: CreatePostInput): Promise<Post> {
    return this.prisma.post.create({
      data: createPostInput,
    });
  }

  findAll(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  findOne(id: number): Promise<Post> {
    return this.prisma.post.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updatePostInput: UpdatePostInput): Promise<Post> {
    const { published, title, content } = updatePostInput;

    return this.prisma.post.update({
      where: {
        id,
      },
      data: {
        ...(published && { published }),
        ...(title && { title }),
        ...(content && { content }),
      },
    });
  }

  remove(id: number): Promise<Post> {
    return this.prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
