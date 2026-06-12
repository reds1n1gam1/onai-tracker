export enum Priority {
  CRITICAL = "critical",
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
}

export const enum TaskStatus {
  TODO = "todo",
  IN_PROGRESS = "in_progress",
  DONE = "done",
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
