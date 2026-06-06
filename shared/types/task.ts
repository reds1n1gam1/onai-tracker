export const enum Priority {
    URGENT = 'urgent',
    MEDIUM = 'medium',
    LOW = 'low'
}

export interface Task {
    title: string,
    priority: Priority,
    project: string,
    shortDescription?: string,
}