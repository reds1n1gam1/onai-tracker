import type { TimerState } from "./timer-state";

export interface TimeSession {
  id: string;
  userId: string;
  taskId: string;
  status: TimerState;
  startedAt: Date;
  pausedAt?: Date;
  endedAt?: Date;
  durationSeconds: number;
  user: User;
  task: Task;
  createdAt: Date;
  updatedAt: Date;
}
