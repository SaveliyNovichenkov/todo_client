import {all, call, put, takeEvery} from "redux-saga/effects";
import {createSubtask, deleteSubtaskById, findSubtaskById, updateSubtask} from "../services/subtask/subtask.service";
import {SubtaskInterface} from "./subtaskTypes";
import {SubtaskFailure, SubtaskSuccess} from "./actionSubtaskCreator";
import {errorCatch} from "../../utils/api.utils";
import {
    SUBTASK_CREATE_REQUEST,
    SUBTASK_DELETE_REQUEST,
    SUBTASK_FIND_BY_ID_REQUEST,
    SUBTASK_UPDATE_REQUEST
} from "./actionSubtaskType";


export function* findByIdSubtaskSaga(action:any) {
    try {
        const data: SubtaskInterface = yield call (findSubtaskById, {
            accessToken: action.payload.accessToken,
            id: action.payload.todoId
        })
        yield put(
            SubtaskSuccess(data)
        )
    } catch (error) {
        yield put(
            SubtaskFailure(errorCatch(error))
        )
    }
}

export function* createSubtaskSaga(action:any) {
    try {
        const data: SubtaskInterface = yield call (createSubtask, {
            accessToken: action.payload.accessToken,
            todoId: action.payload.todoId,
            name: action.payload.name,
            description: action.payload.description,
            status: action.payload.status})
        yield put(
            SubtaskSuccess(data)
        )
    } catch (error) {
        yield put(
            SubtaskFailure(errorCatch(error))
        )
    }
}

export function* updateSubtaskSaga(action:any) {
    try {
        const data: SubtaskInterface = yield call (updateSubtask, {
            accessToken: action.payload.accessToken,
            subtaskId: action.payload.subtaskId,
            todoId: action.payload.todoId,
            name: action.payload.name,
            description: action.payload.description,
            status: action.payload.status})
        yield put(
            SubtaskSuccess(data)
        )
    } catch (error) {
        yield put(
            SubtaskFailure(errorCatch(error))
        )
    }
}

export function* deleteSubtaskSaga(action:any) {
    try {
        const data: SubtaskInterface = yield call (deleteSubtaskById, {
            accessToken: action.payload.accessToken,
            subtaskId: action.payload.subtaskId,
           })
        yield put(
            SubtaskSuccess(data)
        )
    } catch (error) {
        yield put(
            SubtaskFailure(errorCatch(error))
        )
    }
}

export function* createSubtaskSagaWatcher(){
    yield all ([takeEvery(SUBTASK_CREATE_REQUEST, createSubtaskSaga)])
}

export function* updateSubtaskSagaWatcher(){
    yield all ([takeEvery(SUBTASK_UPDATE_REQUEST, updateSubtaskSaga)])
}

export function* deleteSubtaskSagaWatcher(){
    yield all ([takeEvery(SUBTASK_DELETE_REQUEST, deleteSubtaskSaga)])
}

export function* findByIdSubtaskSagaSagaWatcher(){
    yield all ([takeEvery(SUBTASK_FIND_BY_ID_REQUEST, findByIdSubtaskSaga)])
}