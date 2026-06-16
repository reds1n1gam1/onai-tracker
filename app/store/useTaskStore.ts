type PrismaTask = {
  id: string;
  userId: string;
  projectId: string | undefined;
  title: string;
  shortDescription: string | undefined;
  priority: string;
  status: string;
  estimatedMinutes: number | undefined;
  trackedSeconds: number;
  dueDate: string | undefined;
  createdAt: string;
  updatedAt: string;
  project:
    | {
        id: string;
        userId: string;
        createdAt: string;
        updatedAt: string;
        name: string;
        color: string | undefined;
        description: string | undefined;
      }
    | undefined;
};

type StoreTask = Omit<
  Task,
  "user" | "timeSessions" | "project" | "createdAt" | "updatedAt"
>;

function primsmaToStoreMapper(tasks: PrismaTask[]): StoreTask[] {
  let mappedTasks: StoreTask[] = [];

  tasks.forEach((prismaTask) => {
    mappedTasks.push({
      ...prismaTask,
      priority: priorityFormatter(prismaTask.priority),
      status: taskStatusFormatter(prismaTask.status),
      dueDate: new Date(prismaTask.dueDate || 0),
    });
  });

  return mappedTasks;
}

function priorityFormatter(prismaPriority: string): Priority {
  if (prismaPriority === "medium") return Priority.MEDIUM;
  if (prismaPriority === "high") return Priority.HIGH;
  if (prismaPriority === "critical") return Priority.CRITICAL;

  return Priority.LOW;
}

function taskStatusFormatter(prismaTaskStatus: string): TaskStatus {
  if (prismaTaskStatus === "in_progress") return TaskStatus.IN_PROGRESS;
  if (prismaTaskStatus === "paused") return TaskStatus.PAUSED;
  if (prismaTaskStatus === "done") return TaskStatus.DONE;
  if (prismaTaskStatus === "canceled") return TaskStatus.CANCELED;

  return TaskStatus.TODO;
}

function filterByPriority(
  tasks: StoreTask[],
  priority: Priority,
): StoreTask | undefined {
  return tasks.filter((task) => {
    return task.priority === priority;
  })[0];
}

export const useTasksStore = defineStore("tasks", {
  state: () => ({ tasks: [] as StoreTask[] }),
  getters: {
    getTasks: (state) => state.tasks,
    getMostPriorityTask: (state) => {
      let mostCriticalTask: StoreTask | undefined = undefined;

      Object.values(Priority)
        .reverse()
        .forEach((priority) => {
          if (!mostCriticalTask) {
            const resultTask = filterByPriority(state.tasks, priority);

            if (resultTask) {
              mostCriticalTask = resultTask;
            }
          }
        });

      return mostCriticalTask;
    },
  },
  actions: {
    async fetchAllTasks() {
      const allTasks: PrismaTask[] = await $fetch("/api/tasks", {
        method: "GET",
      });

      this.tasks = primsmaToStoreMapper(allTasks);
    },
  },
});
