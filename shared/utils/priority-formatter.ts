import { Priority } from "../types/task";

export const formatPriority = (priority: string): Priority | undefined => {

    if (priority === Priority.URGENT) {
        return Priority.URGENT
    }

    if (priority === Priority.MEDIUM) {
        return Priority.MEDIUM
    }

    return Priority.LOW

}