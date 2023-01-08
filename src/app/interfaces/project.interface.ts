export interface Todo {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    name: string;
    description: string;
    status: 'queue' | 'development' | 'done';
    priority: 'low' | 'medium' | 'maximum';
    dateCompleted: number;
    filePath: string;
    numeric: number;
}

export interface ProjectInterface {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    todos?: Todo[];
}

export interface ProjectDto {
    description: string;
    name: string;
}