import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { BaseModel } from './base.model'

@Injectable()
export class UserModel extends BaseModel<'user'> {
  constructor(prisma: PrismaService) {
    super(prisma, 'user')
  }
}
