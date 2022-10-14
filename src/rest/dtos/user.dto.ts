import { ZodDtoStatic } from '@anatine/zod-nestjs'
import { extendApi } from '@anatine/zod-openapi'
import { User } from '@prisma/client'
import { z } from 'zod'
import { toZod } from 'tozod'
import { OmitHiddenFields } from 'src/database/models/base.model'

// Base schemas
export const UserZ: toZod<User> = z.object({
  id: z.string(),
  nickName: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
export const UserListZ: toZod<User[]> = z.array(UserZ)
export const UserCreationZ: toZod<OmitHiddenFields<User>> = z.object({
  nickName: z.string(),
})
export const UserUpdateZ: toZod<Partial<OmitHiddenFields<User>>> = z.object({
  nickName: z.string().optional(),
})

// OpenAPI Schemas
export const UserOAZ = extendApi(UserZ, {
  description: 'A user',
})
export const UserListOAZ = extendApi(UserListZ, {
  description: 'A list of user',
})
export const UserCreationOAZ = extendApi(UserCreationZ, {
  title: 'UserCreation',
  description: 'A user creation payload',
})
export const UserUpdateOAZ = extendApi(UserUpdateZ, {
  title: 'UserUpdate',
  description: 'A user update payload',
})

// DTOs
export type UserDto = ZodDtoStatic<typeof UserZ>
export type UserListDto = ZodDtoStatic<typeof UserListZ>
export type UserCreationDto = ZodDtoStatic<typeof UserCreationZ>
export type UserUpdateDto = ZodDtoStatic<typeof UserUpdateZ>
