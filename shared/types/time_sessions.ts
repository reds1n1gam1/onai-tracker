export const enum TimeSessionStatus {
  running,
  paused,
  completed,
}

export type TimeSession = {
  id: string;
  userId: string;
  taskId: string;
  status: TimeSessionStatus;
  startedAt: Date;
  pausedAt?: Date;
  endedAt?: Date;
  durationSeconds: number;
  user: User;
  task: Task;
  createdAt: Date;
  updatedAt: Date;
};
