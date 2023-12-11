export enum Priority {
    "critical",
    "High",
    "Medium",
    "low"
}

export enum Status {
    "todo",
    "in-progress",
    "complete"
}
export interface Task {
    id: string;
    assignee: string;
    priority: Priority;
    status: Status;
    isCompleted: boolean;
    date_modified: Date;
    date_complete: Date;
}
