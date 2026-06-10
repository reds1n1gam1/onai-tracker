import { z } from 'zod'

const bodySchema = z.object({
    email: z.email(),
    password: z.string().min(8),
    name: z.string().max(256),
})

export default defineEventHandler(async (event) => {
    const { email, password, name } = await readValidatedBody(event, bodySchema.parse)

    let user = await prisma.user.findUnique({ where: { email } })

    console.log(user)

    if (!user) {
        await prisma.user.create({
            data: {
                email,
                name,
                password,
                role: 'USER',
            },
        })

        await setUserSession(event, {
            user: {
                name: 'John Doe',
            },
        })

        return true

    } else {
        throw createError({
            status: 401,
            message: 'Bad credentials',
        })
    }


})
