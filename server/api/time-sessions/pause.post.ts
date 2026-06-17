import z from "zod";

const bodySchema = z.object({
  timeSessionId: z.string(),
  durationSeconds: z.number(),
});

export default defineEventHandler(async (event) => {
  const { timeSessionId, durationSeconds } = await readValidatedBody(
    event,
    bodySchema.parse,
  );

  const session = await requireUserSession(event);

  const activeSession = await prisma.timeSession.update({
    where: {
      id: timeSessionId,
      userId: session.user.id,
    },
    data: {
      status: "paused",
      pausedAt: new Date(),
      durationSeconds,
    },
  });

  return activeSession;
});
