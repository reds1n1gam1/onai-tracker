import { z } from "zod";

const bodySchema = z.object({
  priority: z.string(),
  project: z.string(),
  title: z.string(),
});

export default defineEventHandler(async (event) => {
  const { priority, project, title } = await readValidatedBody(
    event,
    bodySchema.parse,
  );

  const userSession = await requireUserSession(event);

  const task = await prisma.task.create({
    data: {
      title,
      projectId: project,
      userId: userSession.user.id,
      priority: formatPriority(priority),
    },
  });

  return task;
});
