import z from "zod";

const bodySchema = z.object({
  timeSessionId: z.string(),
});

export default defineEventHandler(async (event) => {
  const { timeSessionId } = await readValidatedBody(event, bodySchema.parse);

  const session = await requireUserSession(event);

  const activeSession = await prisma.timeSession.update({
    where: {
      id: timeSessionId,
      userId: session.user.id,
    },
    data: {
      status: "running",
    },
  });

  return activeSession;
});
