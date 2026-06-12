export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event);

  const userData = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  return userData;
});
