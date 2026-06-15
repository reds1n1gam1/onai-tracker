import { defineStore } from "pinia";

export const useTimerStore = defineStore("timer", {
  state: () => ({
    timeSessionId: "",
    currentState: "not_started",
    taskId: "",
    startedAt: new Date(),
  }),
  getters: {
    getCurrentState: (state) => state.currentState,
    getStartedAt: (state) => state.startedAt,
  },
  actions: {
    async startTimeSession(taskId: string) {
      const newTimeSession = await $fetch("/api/time-sessions/start", {
        method: "POST",
        body: {
          taskId,
        },
      });

      this.currentState = "running";
      this.taskId = taskId;
      this.startedAt = new Date(newTimeSession.startedAt);
      this.timeSessionId = newTimeSession.id;
    },
    async fetchActiveSession() {
      const activeSession = await $fetch("/api/time-sessions/active", {
        method: "GET",
      });

      if (activeSession && activeSession.status === "running") {
        console.log("inside condition");

        this.currentState = "running";
        this.taskId = activeSession.taskId;
        this.startedAt = new Date(activeSession.startedAt);
        this.timeSessionId = activeSession.id;
      }
    },
    async stopActiveSession() {
      const updatedSession = await $fetch("/api/time-sessions/stop", {
        method: "POST",
        body: {
          timeSessionId: this.timeSessionId,
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
    },
  },
});
