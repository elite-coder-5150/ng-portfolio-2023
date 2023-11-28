export enum Type {
    angular,
    react,
    vue,
    stand_alone
}
export interface ComponentData {
    component_id: number;
    author: string;
    version: string;
    type: Type;
    updatedDate: Date;
    createdDate: Date;
}
