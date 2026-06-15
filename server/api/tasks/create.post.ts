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

  const session = await requireUserSession(event);

  const task = await prisma.task.create({
    data: {
      title,
      projectId: project,
      userId: session.user.id,
      // priority: formatPriority(priority)
    },
  });

  return true;
});
