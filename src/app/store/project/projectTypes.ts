import {ProjectInterface} from "../../interfaces/project.interface";

export interface ProjectState {
    projects: ProjectByToken[]
    isLoading: boolean,
    error: string | null,
    project: ProjectById
}

export interface ProjectById {
    id: number
    createdAt: string
    updatedAt: string
    name: string
    description: string
    todos: TodoInterfaceInProject[]
}

export interface TodoInterfaceInProject {
    id: string
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

export interface ProjectByToken {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
}

export interface ProjectDto {
    description: string;
    name: string;
    accessToken: string
}

export interface DeletePayload {
    id: number
    accessToken: string
}

export interface UpdatePayload {
    id: number
    accessToken: string
    name: string
    description: string
}

export interface ProjectCreatePayload {
    id: number
    name: string
    description: string
    user: {
        id: number
    }
    createdAt: Date;
    updatedAt: Date;
}

export interface ProjectRequestPayload {
    accessToken: string
    id: string
}

export interface ProjectSuccessPayload {
    projects: ProjectByToken[]
}

export interface ProjectFailurePayload {
    error: string | null
}