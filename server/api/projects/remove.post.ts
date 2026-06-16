import { z } from "zod";

const bodySchema = z.object({
  projectId: z.string(),
});

export default defineEventHandler(async (event) => {
  const { projectId } = await readValidatedBody(event, bodySchema.parse);

  const removedProject = await prisma.project.delete({
    where: {
      id: projectId,
    },
  });

  return removedProject;
});
