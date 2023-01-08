export interface SubtaskInterface {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    status: 'queue' | 'development' | 'done';
}

export interface SubtaskDto {
    description: string;
    name: string;
    status: 'queue' | 'development' | 'done';
}