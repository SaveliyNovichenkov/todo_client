export interface SubtaskRequestDto {
    accessToken: string
    todoId: number
    description: string;
    name: string;
    status: string;
}

export interface SubtaskUpdateDto {
    accessToken: string
    subtaskId: number
    todoId: number
    description: string;
    name: string;
    status: string;
}

export interface SubtaskState {
    isLoading: boolean,
    error: string | null,
    subtasks: SubtaskInterface[],
    subtask: {
        id: number | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        name: string | null;
        description: string | null;
        status: 'queue' | 'development' | 'done' | null;
        todo: {
            id: number | null
        };
    }
}

export interface SubtaskInterface {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    status: 'queue' | 'development' | 'done';
    todo: {
        id: number
    };
}
