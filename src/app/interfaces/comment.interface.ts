export interface User {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    name: string;
    avatarPath: string;
}

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

export interface CommentInterface {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    message: string;
    user: User;
    todo: Todo;
    children?: CommentInterface[];
}

export interface CommentDto {
    message: string;
    userId: number;
    todoId: number;
    parentId?: number;
}