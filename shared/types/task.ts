export enum Priority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  CRITICAL = "critical",
}

export enum TaskStatus {
  TODO = "todo",
  IN_PROGRESS = "in_progress",
  PAUSED = "paused",
  DONE = "done",
  CANCELED = "canceled",
}

export interface Task {
  id: string;
  userId: string;
  projectId?: string;

  title: string;
  shortDescription?: string;
  priority: Priority;
  status: TaskStatus;

  estimatedMinutes?: number;
  trackedSeconds: number;
  dueDate?: Date;

  user: User;
  project?: Project;
  timeSessions: TimeSession[];

  createdAt: Date;
  updatedAt: Date;
}
