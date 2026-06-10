import { z } from 'zod'

const bodySchema = z.object({
    email: z.email(),
    password: z.string().min(8),
    name: z.string().max(256),
})

export default defineEventHandler(async (event) => {
    const { email, password, name } = await readValidatedBody(event, bodySchema.parse)

    let user = await prisma.user.findUnique({ where: { email } })

    if (!user) {
        const newPassword = await hashPassword(password)

        await prisma.user.create({
            data: {
                email,
                name,
                password: newPassword,
                role: 'USER',
            },
        })

        await setUserSession(event, {
            user: {
                name,
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
