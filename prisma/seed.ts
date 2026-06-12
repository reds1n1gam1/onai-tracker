import "dotenv/config";
import { PrismaClient } from "./generated-client/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

const HASHED_PASSWORD =
  "$scrypt$n=16384,r=8,p=1$jGqiiAndOYB9Rg1kGEU4ow$ZQQKrMbf3/+WVJekndqBAX/cfVgH/KolCXcgVZ8Ws1wGaeDPWV0ofu2xdcg5yYK3mE8rHiIce+DFnxE7/cnSwg";

async function main() {
  const user = await prisma.user.upsert({
    where: {
      email: "demo@example.com",
    },
    update: {},
    create: {
      email: "Useruser01@emailsreg.com",
      name: "Demo User",
      password: HASHED_PASSWORD,
      role: "USER",
    },
  });

  const appProject = await prisma.project.upsert({
    where: {
      id: "project_priority_time_tracker",
    },
    update: {},
    create: {
      id: "project_priority_time_tracker",
      userId: user.id,
      name: "Priority Time Tracker",
      color: "#2563eb",
      description: "Main product work for the time tracking application.",
    },
  });

  const dashboardProject = await prisma.project.upsert({
    where: {
      id: "project_dashboard",
    },
    update: {},
    create: {
      id: "project_dashboard",
      userId: user.id,
      name: "Dashboard",
      color: "#0ea5e9",
      description: "Dashboard timer, quick task input, and today tasks.",
    },
  });

  const marketingProject = await prisma.project.upsert({
    where: {
      id: "project_marketing",
    },
    update: {},
    create: {
      id: "project_marketing",
      userId: user.id,
      name: "Marketing Website",
      color: "#38bdf8",
      description: "Landing page, pricing, FAQ, and footer content.",
    },
  });

  const task1 = await prisma.task.upsert({
    where: {
      id: "task_dashboard_timer",
    },
    update: {},
    create: {
      id: "task_dashboard_timer",
      userId: user.id,
      projectId: dashboardProject.id,
      title: "Design dashboard timer block",
      shortDescription:
        "Create the main timer section with task context and controls.",
      priority: "high",
      status: "in_progress",
      estimatedMinutes: 120,
      trackedSeconds: 5700,
      dueDate: new Date("2026-06-15T10:00:00.000Z"),
    },
  });

  const task2 = await prisma.task.upsert({
    where: {
      id: "task_quick_input",
    },
    update: {},
    create: {
      id: "task_quick_input",
      userId: user.id,
      projectId: appProject.id,
      title: "Implement quick task input",
      shortDescription:
        "Add a form for creating tasks with priority, text, and project selection.",
      priority: "critical",
      status: "todo",
      estimatedMinutes: 90,
      trackedSeconds: 2700,
      dueDate: new Date("2026-06-12T12:00:00.000Z"),
    },
  });

  const task3 = await prisma.task.upsert({
    where: {
      id: "task_today_list",
    },
    update: {},
    create: {
      id: "task_today_list",
      userId: user.id,
      projectId: dashboardProject.id,
      title: "Create today tasks list",
      shortDescription: "Show today tasks with tracked time and status.",
      priority: "medium",
      status: "in_progress",
      estimatedMinutes: 150,
      trackedSeconds: 7800,
      dueDate: new Date("2026-06-14T09:00:00.000Z"),
    },
  });

  const task4 = await prisma.task.upsert({
    where: {
      id: "task_recommended_card",
    },
    update: {},
    create: {
      id: "task_recommended_card",
      userId: user.id,
      projectId: appProject.id,
      title: "Build recommended task card",
      shortDescription: "Display the task with the highest priority score.",
      priority: "high",
      status: "todo",
      estimatedMinutes: 80,
      trackedSeconds: 1500,
      dueDate: new Date("2026-06-13T14:00:00.000Z"),
    },
  });

  const task5 = await prisma.task.upsert({
    where: {
      id: "task_landing_faq",
    },
    update: {},
    create: {
      id: "task_landing_faq",
      userId: user.id,
      projectId: marketingProject.id,
      title: "Prepare landing page FAQ",
      shortDescription: "Write FAQ content for the public landing page.",
      priority: "low",
      status: "done",
      estimatedMinutes: 45,
      trackedSeconds: 1800,
      dueDate: new Date("2026-06-11T16:00:00.000Z"),
    },
  });

  await prisma.timeSession.deleteMany({
    where: {
      userId: user.id,
    },
  });

  await prisma.timeSession.createMany({
    data: [
      {
        userId: user.id,
        taskId: task1.id,
        status: "completed",
        startedAt: new Date("2026-06-10T06:00:00.000Z"),
        endedAt: new Date("2026-06-10T07:00:00.000Z"),
        durationSeconds: 3600,
      },
      {
        userId: user.id,
        taskId: task1.id,
        status: "completed",
        startedAt: new Date("2026-06-10T07:15:00.000Z"),
        endedAt: new Date("2026-06-10T07:50:00.000Z"),
        durationSeconds: 2100,
      },
      {
        userId: user.id,
        taskId: task2.id,
        status: "completed",
        startedAt: new Date("2026-06-10T08:00:00.000Z"),
        endedAt: new Date("2026-06-10T08:45:00.000Z"),
        durationSeconds: 2700,
      },
      {
        userId: user.id,
        taskId: task3.id,
        status: "running",
        startedAt: new Date("2026-06-10T10:45:00.000Z"),
        durationSeconds: 3000,
      },
      {
        userId: user.id,
        taskId: task4.id,
        status: "paused",
        startedAt: new Date("2026-06-10T11:40:00.000Z"),
        pausedAt: new Date("2026-06-10T12:05:00.000Z"),
        durationSeconds: 1500,
      },
      {
        userId: user.id,
        taskId: task5.id,
        status: "completed",
        startedAt: new Date("2026-06-09T15:00:00.000Z"),
        endedAt: new Date("2026-06-09T15:30:00.000Z"),
        durationSeconds: 1800,
      },
    ],
  });

  console.log("Seed completed");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
