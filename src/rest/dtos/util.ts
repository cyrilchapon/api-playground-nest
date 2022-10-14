import { ArrayCardinality, z, ZodTypeAny } from 'zod'

type UnknownKeysParam = 'passthrough' | 'strict' | 'strip'

export type toZodArray<
  T extends ZodTypeAny,
  Cardinality extends ArrayCardinality = 'many',
> = z.ZodArray<T, Cardinality>

export type toZodObject<
  T extends z.ZodRawShape,
  UnknownKeys extends UnknownKeysParam = 'strict',
> = z.ZodObject<T, UnknownKeys>
