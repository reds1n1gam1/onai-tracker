export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event);

  const projects = await prisma.task.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      id: "desc",
    },
    include: {
      project: true,
    },
  });

  return projects;
});
