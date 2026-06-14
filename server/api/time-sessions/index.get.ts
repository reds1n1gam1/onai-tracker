export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event);

  const timeSessions = await prisma.timeSession.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      updatedAt: "desc",
    },
    include: {
      task: {
        include: {
          project: true,
        },
      },
    },
  });

  return timeSessions;
});
