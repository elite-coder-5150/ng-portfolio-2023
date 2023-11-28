export enum status {
    read,
    unread
}
export interface Notifications {
    notification_id: number;
    notified_by: string;
    type: string;
    message: string;
    post_id: number;
    time: Date;
    stauts: status;
}