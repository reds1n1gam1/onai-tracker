import { z } from "zod";

const bodySchema = z.object({
  name: z.string(),
  color: z.string(),
  description: z.string(),
});

export default defineEventHandler(async (event) => {
  const { name, color, description } = await readValidatedBody(
    event,
    bodySchema.parse,
  );

  const userSession = await requireUserSession(event);

  const task = await prisma.project.create({
    data: {
      name,
      color,
      userId: userSession.user.id,
      description,
    },
  });

  return task;
});
