import { ZodDtoStatic } from '@anatine/zod-nestjs'
import { extendApi } from '@anatine/zod-openapi'
import { Post } from '@prisma/client'
import { z } from 'zod'
import { toZod } from 'tozod'
import { OmitHiddenFields as OmitDefaultHiddenFields } from 'src/database/models/base.model'

const postRestrictedFields = ['creatorId', 'publishedAt'] as const
type PostRestrictedField = typeof postRestrictedFields[number]

type OmitHiddenFields<T> = Omit<OmitDefaultHiddenFields<T>, PostRestrictedField>

// Base schemas
export const PostZ: toZod<Post> = z.object({
  id: z.string(),
  content: z.string(),
  title: z.string(),
  publishedAt: z.date().nullable(),
  creatorId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
export const PostListZ: toZod<Post[]> = z.array(PostZ)
export const PostCreationZ: toZod<OmitHiddenFields<Post>> = z.object({
  content: z.string(),
  title: z.string(),
  publishedAt: z.date().nullable(),
})
export const PostUpdateZ: toZod<Partial<OmitHiddenFields<Post>>> = z.object({
  content: z.string().optional(),
  title: z.string().optional(),
  publishedAt: z.date().nullable(),
})

// OpenAPI Schemas
export const PostOAZ = extendApi(PostZ, {
  description: 'A post',
})
export const PostListOAZ = extendApi(PostListZ, {
  description: 'A list of post',
})
export const PostCreationOAZ = extendApi(PostCreationZ, {
  title: 'PostCreation',
  description: 'A post creation payload',
})
export const PostUpdateOAZ = extendApi(PostUpdateZ, {
  title: 'PostUpdate',
  description: 'A post update payload',
})

// DTOs
export type PostDto = ZodDtoStatic<typeof PostZ>
export type PostListDto = ZodDtoStatic<typeof PostListZ>
export type PostCreationDto = ZodDtoStatic<typeof PostCreationZ>
export type PostUpdateDto = ZodDtoStatic<typeof PostUpdateZ>
