import {
    DeletePayload, ProjectById,
    ProjectByToken,
    ProjectDto,
    ProjectRequestPayload, TodoDto, TodoInterfaceInProject,
    UpdatePayload
} from "./projectTypes";



export const UPDATE_PROJECT_REQUEST = "UPDATE_PROJECT_REQUEST"
export interface UpdateProject {
    type: typeof UPDATE_PROJECT_REQUEST;
    payload: UpdatePayload
}

export const UPDATE_PROJECT_SUCCESS = "UPDATE_PROJECT_SUCCESS"
export interface UpdateProjectSuccess {
    type: typeof UPDATE_PROJECT_SUCCESS;
    payload: UpdatePayload
}

export const DELETE_PROJECT_REQUEST = "DELETE_PROJECT_REQUEST"
export interface DeleteProject {
    type: typeof DELETE_PROJECT_REQUEST;
    payload: DeletePayload
}

export const DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS"
export interface DeleteProjectSuccess {
    type: typeof DELETE_PROJECT_SUCCESS;
    payload: DeletePayload
}

export const CREATE_PROJECTS_REQUEST = "CREATE_PROJECTS_REQUEST"
export interface CreateProjectRequest {
    type: typeof CREATE_PROJECTS_REQUEST;
    payload: ProjectDto
}

export const PROJECTS_REQUEST = "PROJECTS_REQUEST"
export interface ProjectsRequest {
    type: typeof PROJECTS_REQUEST;
    payload: ProjectRequestPayload
}

export const PROJECTS_SUCCESS = "PROJECTS_SUCCESS"
export interface ProjectsSuccess {
    type: typeof PROJECTS_SUCCESS;
    payload: ProjectByToken[]
}

export const PROJECTS_SUCCESS_CREATE = "PROJECTS_SUCCESS_CREATE"
export interface ProjectsSuccessCreate {
    type: typeof PROJECTS_SUCCESS_CREATE;
    payload: ProjectByToken
}

export const PROJECTS_FAILURE = "PROJECTS_FAILURE"
export interface ProjectsFailure {
    type: typeof PROJECTS_FAILURE;
    payload: string | null
}


export const PROJECT_BY_ID_REQUEST = "PROJECT_BY_ID_REQUEST"
export interface ProjectByIdRequest {
    type: typeof PROJECT_BY_ID_REQUEST;
    payload: number
}

export const ADD_TODO_IN_PROJECT_REQUEST = "ADD_TODO_IN_PROJECT_REQUEST"
export interface AddTodoInProjectRequest {
    type: typeof ADD_TODO_IN_PROJECT_REQUEST;
    payload: TodoDto
}

export const ADD_TODO_IN_PROJECT_SUCCESS = "ADD_TODO_IN_PROJECT_SUCCESS"
export interface AddTodoInProjectSuccess {
    type: typeof ADD_TODO_IN_PROJECT_SUCCESS;
    payload: TodoInterfaceInProject
}

export const PROJECT_BY_ID_SUCCESS = "PROJECT_BY_ID_SUCCESS"
export interface ProjectByIdSuccess {
    type: typeof PROJECT_BY_ID_SUCCESS;
    payload: ProjectById
}

export const PROJECT_BY_ID_FAILURE = "PROJECT_BY_ID_FAILURE"
export interface ProjectByIdFailure {
    type: typeof PROJECT_BY_ID_FAILURE;
    payload: string | null
}



export type projectAction =
    | UpdateProject
    | UpdateProjectSuccess
    | DeleteProject
    | DeleteProjectSuccess
    | CreateProjectRequest
    | ProjectsSuccessCreate
    | ProjectsRequest
    | ProjectsSuccess
    | ProjectsFailure
    | ProjectByIdRequest
    | ProjectByIdSuccess
    | ProjectByIdFailure
    | AddTodoInProjectSuccess
    | AddTodoInProjectRequest









