import { defineStore } from "pinia";

export const useTimerStore = defineStore("timer", {
  state: () => ({
    currentState: "not_started",
    taskId: "",
    startedAt: new Date(),
  }),
  getters: {
    getCurrentState: (state) => state.currentState,
    getStartedAt: (state) => state.startedAt,
  },
  actions: {
    startTimeSession(taskId: string, startedAt: Date) {
      this.currentState = "running";
      this.taskId = taskId;
      this.startedAt = startedAt;
    },
    async fetchActiveSession() {
      const activeSession = await $fetch("/api/time-sessions/active", {
        method: "GET",
      });

      if (activeSession && activeSession.status === "running") {
        this.currentState = "running";
        this.taskId = activeSession.taskId;
        this.startedAt = new Date(activeSession.startedAt);
      }
    },
  },
});
