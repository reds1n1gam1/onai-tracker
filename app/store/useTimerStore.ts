import { defineStore } from "pinia";

function getTimerState(state?: string): TimerState {
  if (!state) {
    return TimerState.NOT_STARTED;
  }

  if (state === "running") {
    return TimerState.RUNNING;
  }

  if (state === "paused") {
    return TimerState.PAUSED;
  }

  return TimerState.NOT_STARTED;
}

export const useTimerStore = defineStore("timer", {
  state: () => ({
    currentState: TimerState.NOT_STARTED,
    activeTimeSession: {} as Partial<TimeSession>,
  }),
  getters: {
    getCurrentState: (state) => state.currentState,
    getActiveSession: (state) => state.activeTimeSession,
    getStartedAt: (state) => state.activeTimeSession.startedAt,
  },
  actions: {
    async fetchActiveSession() {
      const activeSession = await $fetch("/api/time-sessions/active", {
        method: "GET",
      });

      if (activeSession && activeSession.status === TimerState.RUNNING) {
        this.currentState = TimerState.RUNNING;
        this.activeTimeSession = {
          id: activeSession.id,
          userId: activeSession.userId,
          taskId: activeSession.taskId,
          status: getTimerState(activeSession.status),
          startedAt: new Date(activeSession.startedAt),
          pausedAt: new Date(activeSession.pausedAt || 0),
          endedAt: new Date(activeSession.endedAt || 0),
          durationSeconds: activeSession.durationSeconds,
          updatedAt: new Date(activeSession.updatedAt),
          createdAt: new Date(activeSession.createdAt),
        };
      }
    },
    async startTimeSession(taskId: string) {
      const startedTimeSession = await $fetch("/api/time-sessions/start", {
        method: "POST",
        body: {
          taskId,
        },
      });
      this.currentState = TimerState.RUNNING;
      this.activeTimeSession = {
        id: startedTimeSession.id,
        userId: startedTimeSession.userId,
        taskId: startedTimeSession.taskId,
        status: getTimerState(startedTimeSession.status),
        startedAt: new Date(startedTimeSession.startedAt),
        pausedAt: new Date(startedTimeSession.pausedAt || 0),
        endedAt: new Date(startedTimeSession.endedAt || 0),
        durationSeconds: startedTimeSession.durationSeconds,
        updatedAt: new Date(startedTimeSession.updatedAt),
        createdAt: new Date(startedTimeSession.createdAt),
      };
    },
    async stopActiveSession() {
      const updatedSession = await $fetch("/api/time-sessions/stop", {
        method: "POST",
        body: {
          timeSessionId: this.activeTimeSession.id,
        },
      });

      if (updatedSession) {
        this.clearTimeSession();
      }
    },
    clearTimeSession() {
      this.currentState = TimerState.NOT_STARTED;
    },
  },
});
