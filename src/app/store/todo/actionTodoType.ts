import {TodoDeletePayload, TodoDto, TodoInterface, TodoRequestDto, TodoUpdateDto} from "./todoTypes";


export const TODO_REQUEST = "TODO_REQUEST"
export interface TodoRequest {
    type: typeof TODO_REQUEST;
    payload: TodoRequestDto
}

export const TODO_SUCCESS_REQUEST = "TODO_SUCCESS_REQUEST"
export interface TodoSuccessRequest {
    type: typeof TODO_SUCCESS_REQUEST;
    payload: TodoInterface
}

export const TODO_FAILURE_REQUEST = "TODO_FAILURE_REQUEST"
export interface TodoFailureRequest {
    type: typeof TODO_FAILURE_REQUEST;
    payload: string | null
}


export const UPDATE_TODO_REQUEST = "UPDATE_TODO_REQUEST"
export interface UpdateTodoFetch {
    type: typeof UPDATE_TODO_REQUEST;
    payload: TodoInterface
}

export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS"
export interface UpdateTodoFetchSuccess {
    type: typeof UPDATE_TODO_SUCCESS;
    payload: TodoUpdateDto
}

export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST"
export interface DeleteTodoFetch {
    type: typeof DELETE_TODO_REQUEST;
    payload: TodoDeletePayload
}

export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS"
export interface DeleteTodoFetchSuccess {
    type: typeof DELETE_TODO_SUCCESS;
    payload: TodoDeletePayload
}

export const CREATE_TODO_REQUEST = "CREATE_TODO_REQUEST"
export interface CreateTodoRequest {
    type: typeof CREATE_TODO_REQUEST;
    payload: TodoDto
}

export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS"
export interface TodoSuccessCreate {
    type: typeof CREATE_TODO_SUCCESS;
    payload: TodoInterface
}

export type todoAction =
    | TodoRequest
    | TodoSuccessRequest
    | TodoFailureRequest
    | CreateTodoRequest
    | TodoSuccessCreate
    | DeleteTodoFetchSuccess
    | DeleteTodoFetch
    | UpdateTodoFetch
    | UpdateTodoFetchSuccess

