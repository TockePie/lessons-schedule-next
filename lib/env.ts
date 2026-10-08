import { z } from 'zod/mini'

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.url({
    message: 'NEXT_PUBLIC_API_URL must be a valid URL pointing to the API.'
  }),
  THIS_WEBSITE_URL: z.url({
    message: 'THIS_WEBSITE_URL must be a valid URL pointing to this website.'
  }),
  NODE_ENV: z._default(
    z.enum(['development', 'production', 'test']),
    'development'
  )
})

const parsedSchema = envSchema.safeParse(process.env)

if (!parsedSchema.success) {
  const reason = JSON.stringify(z.treeifyError(parsedSchema.error), null, 2)
  throw new Error(`Invalid environment variables. Reason: ${reason}`)
}

export const env = parsedSchema.data
