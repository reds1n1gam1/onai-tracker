export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event);

  const activeSession = await prisma.timeSession.findFirst({
    where: {
      userId: session.user.id,
      status: "running",
    },
    include: {
      task: {
        include: {
          project: true,
        },
      },
    },
  });

  return activeSession;
});
