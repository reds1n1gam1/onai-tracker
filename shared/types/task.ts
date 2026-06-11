export const enum Priority {
    URGENT = 'urgent',
    MEDIUM = 'medium',
    LOW = 'low'
}

export const enum TaskStatus {
    TODO = '',
    IN_PROGRESS = '',
    DONE = '',
}

export interface Task {
    id: string,
    userId: string
    projectId?: string,

    title: string,
    shortDescription?: string,
    priority: Priority,
    status: TaskStatus,

    estimatedMinutes?: number,
    trackedSeconds: number,
    dueDate?: Date,

    user: User,
    project?: Project,
    timeSessions: TimeSession[]

    createdAt: Date,
    updatedAt: Date,
}