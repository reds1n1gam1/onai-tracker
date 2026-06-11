export default defineEventHandler(async (event) => {
    const session = await requireUserSession(event)

    const projects = await prisma.timeSession.findMany({ where: { userId: session.user.id }, orderBy: { id: "desc" }, });

    return projects;
})
