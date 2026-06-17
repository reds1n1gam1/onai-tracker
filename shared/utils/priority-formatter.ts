import { Priority, TaskStatus } from "../types/task";
import { TimerState } from "../types/timer-state";

export const formatPriority = (priority: string): Priority | undefined => {
  if (priority === Priority.CRITICAL) {
    return Priority.CRITICAL;
  }

  if (priority === Priority.HIGH) {
    return Priority.HIGH;
  }

  if (priority === Priority.MEDIUM) {
    return Priority.MEDIUM;
  }

  return Priority.LOW;
};

export const formatStatus = (status?: string): TaskStatus => {
  if (status === TaskStatus.CANCELED) {
    return TaskStatus.CANCELED;
  }

  if (status === TaskStatus.DONE) {
    return TaskStatus.DONE;
  }

  if (status === TaskStatus.IN_PROGRESS) {
    return TaskStatus.IN_PROGRESS;
  }

  if (status === TaskStatus.PAUSED) {
    return TaskStatus.PAUSED;
  }

  return TaskStatus.TODO;
};

export const formatTimeSessionStatus = (status?: string): TimerState => {
  if (status === TimerState.COMPLETED) {
    return TimerState.COMPLETED;
  }

  if (status === TimerState.RUNNING) {
    return TimerState.RUNNING;
  }

  return TimerState.PAUSED;
};
