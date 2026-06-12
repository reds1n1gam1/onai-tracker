export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event);

  const activeSession = await prisma.timeSession.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      task: {
        include: {
          project: true,
        },
      },
    },
  });

  console.log(activeSession);

  return activeSession;
});
