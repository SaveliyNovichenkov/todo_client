export interface Project {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
}

export interface Subtask {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    status: string;
}

export interface Comment {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    message: string;
}

export interface TodoInterface {
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
    project: Project;
    subtasks?: Subtask[];
    comments?: Comment[];
}

export interface TodoDto {
    description: string;
    name: string;
    title: string;
    status: 'queue' | 'development' | 'done';
    priority: 'low' | 'medium' | 'maximum';
    dateCompleted: number;
    numeric: number;
    filePath: string;
}