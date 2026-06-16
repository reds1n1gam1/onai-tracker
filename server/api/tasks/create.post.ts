import { z } from "zod";

const bodySchema = z.object({
  priority: z.string(),
  project: z.string(),
  title: z.string(),
  shortDescription: z.string().optional(),
  status: z.string().optional(),
  estimatedMinutes: z.number().optional(),
  dueDate: z.string().optional(),
});

export default defineEventHandler(async (event) => {
  const {
    priority,
    project,
    title,
    shortDescription,
    status,
    estimatedMinutes,
    dueDate,
  } = await readValidatedBody(event, bodySchema.parse);

  const userSession = await requireUserSession(event);

  const task = await prisma.task.create({
    data: {
      title,
      projectId: project,
      userId: userSession.user.id,
      priority: formatPriority(priority),
      shortDescription,
      status: formatStatus(status),
      estimatedMinutes,
      dueDate,
    },
  });

  return task;
});
