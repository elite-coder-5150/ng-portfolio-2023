enum RelationStatus  {
    'PENDING',
    'ACCEPTED',
    'REJECTED',
}
export interface Relationship {
    relation_id: string;
    sender: string;
    receiver: string;
    status: RelationStatus;
    date_started: Date;
}
