import * as actions from "./actionSubtaskType";
import {
    SUBTASK_CREATE_REQUEST,
    SUBTASK_DELETE_REQUEST,
    SUBTASK_FAILURE_REQUEST,
    SUBTASK_FIND_BY_ID_REQUEST,
    SUBTASK_SUCCESS_REQUEST,
    SUBTASK_UPDATE_REQUEST
} from "./actionSubtaskType";
import {SubtaskInterface, SubtaskRequestDto, SubtaskUpdateDto} from "./subtaskTypes";


export const SubtaskDeleteRequest = (payload: {accessToken: string, subtaskId: number}): actions.SubtaskDeleteRequest => ({
    type: SUBTASK_DELETE_REQUEST, payload
})

export const SubtaskUpdateRequest = (payload: SubtaskUpdateDto): actions.SubtaskUpdateRequest => ({
    type: SUBTASK_UPDATE_REQUEST, payload
})

export const SubtaskFindByIdRequest = (payload: { todoId: number, accessToken: string }): actions.SubtaskFindByIdRequest => ({
    type: SUBTASK_FIND_BY_ID_REQUEST, payload
})

export const SubtaskCreateRequest = (payload: SubtaskRequestDto): actions.SubtaskCreateRequest => ({
    type: SUBTASK_CREATE_REQUEST, payload
})

export const SubtaskSuccess = (payload: SubtaskInterface): actions.SubtaskSuccessRequest => ({
    type: SUBTASK_SUCCESS_REQUEST, payload
})

export const SubtaskFailure = (payload: string | null): actions.SubtaskFailureRequest => ({
    type: SUBTASK_FAILURE_REQUEST, payload
})