import * as actions from "./actionTodoType";
import {
    CREATE_TODO_REQUEST,
    CREATE_TODO_SUCCESS,
    DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS,
    TODO_FAILURE_REQUEST,
    TODO_REQUEST,
    TODO_SUCCESS_REQUEST, UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS,
} from "./actionTodoType";
import {TodoRequestDto, TodoInterface, TodoDeletePayload, TodoDto, TodoUpdateDto} from "./todoTypes";


export const TodoRequest = (payload: TodoRequestDto): actions.TodoRequest => ({
    type: TODO_REQUEST, payload
})

export const TodoSuccess = (payload: TodoInterface): actions.TodoSuccessRequest => ({
    type: TODO_SUCCESS_REQUEST, payload
})

export const TodoFailure = (payload: string | null): actions.TodoFailureRequest => ({
    type: TODO_FAILURE_REQUEST, payload
})

export const UpdateTodoFetch = (payload: TodoInterface): actions.UpdateTodoFetch => ({
    type: UPDATE_TODO_REQUEST, payload
})

export const UpdateTodoFetchSuccess = (payload: TodoUpdateDto): actions.UpdateTodoFetchSuccess => ({
    type: UPDATE_TODO_SUCCESS, payload
})

export const DeleteTodoFetch = (payload: TodoDeletePayload): actions.DeleteTodoFetch => ({
    type: DELETE_TODO_REQUEST, payload
})

export const DeleteTodoFetchSuccess = (payload: TodoDeletePayload): actions.DeleteTodoFetchSuccess => ({
    type: DELETE_TODO_SUCCESS, payload
})

export const CreateTodoRequest = (payload: TodoDto): actions.CreateTodoRequest => ({
    type: CREATE_TODO_REQUEST, payload
})

export const TodosSuccessCreate = (payload: TodoInterface): actions.TodoSuccessCreate => ({
    type: CREATE_TODO_SUCCESS, payload
})
