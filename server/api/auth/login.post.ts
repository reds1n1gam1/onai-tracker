import { verifyPassword } from "#imports";
import { z } from "zod";

const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse);

  let user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw createError({
      status: 401,
      message: "Invalid credentials",
    });
  }

  const isPasswordCorrect = await verifyPassword(user.password, password);

  if (!isPasswordCorrect) {
    throw createError({
      status: 401,
      message: "Invalid credentials",
    });
  }

  await setUserSession(event, {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });

  return true;
});
