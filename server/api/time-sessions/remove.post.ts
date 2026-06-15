import { z } from "zod";

const bodySchema = z.object({
  sessionId: z.string(),
});

export default defineEventHandler(async (event) => {
  const { sessionId } = await readValidatedBody(event, bodySchema.parse);

  const session = await prisma.timeSession.delete({
    where: {
      id: sessionId,
    },
  });

  return session;
});
