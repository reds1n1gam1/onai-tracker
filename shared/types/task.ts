export const enum Priority {
    URGENT = 'urgent',
    MEDIUM = 'medium',
    LOW = 'low'
}

export const enum Status {
    TODO = '',
    IN_PROGRESS = '',
    DONE = '',
}

export interface Task {
    title: string,
    priority: Priority,
    project: string,
    shortDescription?: string,
    trackedTime?: string,
    status?: Status
}