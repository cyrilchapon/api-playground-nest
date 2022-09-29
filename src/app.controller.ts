import { Body, Controller, Get, Post } from '@nestjs/common'
import { User } from '@prisma/client'
import { ConfigService } from './config/config.service'
import { PostModel } from './database/models/post.model'
import { UserModel } from './database/models/user.model'

@Controller()
export class AppController {
  constructor(
    private readonly userModel: UserModel,
    private readonly postModel: PostModel,
    private readonly config: ConfigService,
  ) {}

  @Get('users')
  async listUsers(): Promise<User[]> {
    return this.userModel.list()
  }

  @Post('users')
  async createDraft(@Body() userData: { nickName: string }): Promise<User> {
    return this.userModel.create(userData)
  }
}
