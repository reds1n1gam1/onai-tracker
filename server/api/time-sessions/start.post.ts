import { z } from "zod";

const bodySchema = z.object({
  taskId: z.string(),
});

export default defineEventHandler(async (event) => {
  const { taskId } = await readValidatedBody(event, bodySchema.parse);

  const userSession = await requireUserSession(event);

  const newTimeSession = await prisma.timeSession.create({
    data: {
      userId: userSession.user.id,
      taskId,
      status: "running",
    },
    include: {
      user: true,
      task: true,
    },
  });

  return newTimeSession;
});
