export interface TodoState {
    isLoading: boolean
    error: string | null
    todos: TodoInterface[]
}


export interface TodoDto {
    accessToken: string,
    projectId: number,
    name: string,
    description: string,
    title: string,
    status: 'queue' | 'development' | 'done',
    priority: 'low' | 'medium' | 'maximum',
    dateCompleted: number,
    numeric: number,
    filePath?: string
}

export interface TodoRequestDto {
    id: number
    accessToken: string
}

export interface TodoUpdateDto {
    id: number
    description: string
    name: string
    title: string
    status: 'queue' | 'development' | 'done';
    priority: 'low' | 'medium' | 'maximum';
    dateCompleted: number
    numeric: number
    filePath: string
}

export interface TodoDeletePayload {
    id: number,
    accessToken: string
}



export interface TodoInterface {
    id: number
    createdAt: string
    updatedAt: string
    title: string
    name: string
    description: string
    status: 'queue' | 'development' | 'done';
    priority: 'low' | 'medium' | 'maximum';
    dateCompleted: number
    filePath: string
    numeric: number
    project: Project
    subtasks: Subtask[]
    comments: Comment[]
}

export interface Project {
    id: number
    createdAt: string
    updatedAt: string
    name: string
    description: string
}

export interface Subtask {
    id: number
    createdAt: string
    updatedAt: string
    name: string
    description: string
    status: string
}

export interface Comment {
    id: number
    createdAt: string
    updatedAt: string
    message: string
}