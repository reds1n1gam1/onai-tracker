import { z } from "zod";

const bodySchema = z.object({
  taskId: z.string(),
});

export default defineEventHandler(async (event) => {
  const { taskId } = await readValidatedBody(event, bodySchema.parse);

  const removedTask = await prisma.task.delete({
    where: {
      id: taskId,
    },
  });

  return removedTask;
});
