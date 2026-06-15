export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event);

  const activeSession = await prisma.timeSession.findFirst({
    where: {
      userId: session.user.id,
      status: "running",
    },
    include: {
      user: true,
      task: {
        include: {
          project: true,
        },
      },
    },
  });

  if (!activeSession) {
    return undefined;
  }

  return activeSession;
});
