import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { BaseModel } from './base.model'

@Injectable()
export class PostModel extends BaseModel<'post'> {
  constructor(prisma: PrismaService) {
    super(prisma, 'post')
  }
}
