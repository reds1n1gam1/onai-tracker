import { z } from "zod";

const bodySchema = z.object({
  name: z.string().nonempty(),
  email: z.email(),
});

export default defineEventHandler(async (event) => {
  const { name, email } = await readValidatedBody(event, bodySchema.parse);

  const session = await requireUserSession(event);

  const userData = await prisma.user.update({
    where: { id: session.user.id },
    data: {
      name,
      email,
    },
  });

  return userData;
});
