import { z } from 'zod'

const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(8),
})

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse)

  let user = await prisma.user.findUnique({ where: { email } })

  if (!user || user.password !== password) {
    throw createError({
      status: 401,
      message: 'Invalid credentials',
    })
  }

  await setUserSession(event, {
    user: {
      name: 'John Doe',
    },
  })

  return true

})
