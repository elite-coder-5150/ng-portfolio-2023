export enum Status {
    active,
    inactive
}
export interface Newsletter {
    newsletter_id: number;
    f_name: string;
    email: string;
    status: Status;
    created_at: Date
}

