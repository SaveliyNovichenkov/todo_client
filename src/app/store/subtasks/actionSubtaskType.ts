import {SubtaskInterface, SubtaskRequestDto, SubtaskUpdateDto} from "./subtaskTypes";


export const SUBTASK_FIND_BY_ID_REQUEST = "SUBTASK_FIND_BY_ID_REQUEST"
export interface SubtaskFindByIdRequest {
    type: typeof SUBTASK_FIND_BY_ID_REQUEST;
    payload: { todoId: number, accessToken: string }
}

export const SUBTASK_UPDATE_REQUEST = "SUBTASK_UPDATE_REQUEST"
export interface SubtaskUpdateRequest {
    type: typeof SUBTASK_UPDATE_REQUEST;
    payload: SubtaskUpdateDto
}

export const SUBTASK_DELETE_REQUEST = "SUBTASK_DELETE_REQUEST"
export interface SubtaskDeleteRequest {
    type: typeof SUBTASK_DELETE_REQUEST;
    payload: {accessToken: string, subtaskId: number}
}

export const SUBTASK_CREATE_REQUEST = "SUBTASK_CREATE_REQUEST"
export interface SubtaskCreateRequest {
    type: typeof SUBTASK_CREATE_REQUEST;
    payload: SubtaskRequestDto
}

export const SUBTASK_SUCCESS_REQUEST = "SUBTASK_SUCCESS_REQUEST"
export interface SubtaskSuccessRequest {
    type: typeof SUBTASK_SUCCESS_REQUEST;
    payload: SubtaskInterface
}

export const SUBTASK_FAILURE_REQUEST = "SUBTASK_FAILURE_REQUEST"
export interface SubtaskFailureRequest {
    type: typeof SUBTASK_FAILURE_REQUEST;
    payload: string | null
}

export type subtaskAction =
    | SubtaskFindByIdRequest
    | SubtaskDeleteRequest
    | SubtaskUpdateRequest
    | SubtaskCreateRequest
    | SubtaskSuccessRequest
    | SubtaskFailureRequest
