import { Module } from '@nestjs/common'
import { PostModel } from './models/post.model'
import { UserModel } from './models/user.model'
import { PrismaService } from './prisma.service'

@Module({
  providers: [PrismaService, PostModel, UserModel],
  exports: [PostModel, UserModel],
})
export class DatabaseModule {}
