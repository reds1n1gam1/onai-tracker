import { defineStore } from "pinia";
import { useTasksStore } from "./useTaskStore";

export const useTimerStore = defineStore("timer", {
  state: () => ({
    timeSessionId: "",
    currentState: "not_started",
    taskId: "",
    taskTitle: "",
    taskDescription: "",
    startedAt: new Date(),
  }),
  getters: {
    getCurrentState: (state) => state.currentState,
    getStartedAt: (state) => state.startedAt,
  },
  actions: {
    async startTimeSession(taskId: string) {
      const tasks = useTasksStore();

      const newTimeSession = await $fetch("/api/time-sessions/start", {
        method: "POST",
        body: {
          taskId,
        },
      });

      this.currentState = "running";
      this.startedAt = new Date(newTimeSession.startedAt);
      this.timeSessionId = newTimeSession.id;

      this.taskId = newTimeSession.taskId;
      this.taskTitle = tasks.getTaskById(newTimeSession.taskId)?.title || "";
      this.taskDescription =
        tasks.getTaskById(newTimeSession.taskId)?.shortDescription || "";
    },
    async fetchActiveSession() {
      const tasks = useTasksStore();

      const activeSession = await $fetch("/api/time-sessions/active", {
        method: "GET",
      });

      if (activeSession && activeSession.status === "running") {
        this.currentState = "running";
        this.startedAt = new Date(activeSession.startedAt);
        this.timeSessionId = activeSession.id;

        this.taskId = activeSession.taskId;
        this.taskTitle = tasks.getTaskById(activeSession.taskId)?.title || "";
        this.taskDescription =
          tasks.getTaskById(activeSession.taskId)?.shortDescription || "";
      }
    },
    async stopActiveSession() {
      const nowDate = new Date();

      const durationSeconds =
        (nowDate.getTime() - this.startedAt.getTime()) / 1000;

      const updatedSession = await $fetch("/api/time-sessions/stop", {
        method: "POST",
        body: {
          timeSessionId: this.timeSessionId,
          durationSeconds,
        },
      });

      if (updatedSession) {
        this.clearTimeSession();
      }
    },
    clearTimeSession() {
      this.currentState = "not_started";
      this.startedAt = new Date();
      this.taskId = "";
      this.taskTitle = "";
      this.taskDescription = "";
    },
  },
});
