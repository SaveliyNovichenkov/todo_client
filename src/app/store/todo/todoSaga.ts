import {all, call, put, takeEvery} from "redux-saga/effects";
import {errorCatch} from "../../utils/api.utils";
import {TodoInterface} from "./todoTypes";
import {
    DeleteTodoFetchSuccess,
    TodoFailure,
    TodoSuccess,
    UpdateTodoFetchSuccess
} from "./actionTodoCreator";
import {changeTodoById, createTodo, deleteTodoById, findTodoById} from "../services/todo/todo.service";
import {DELETE_TODO_REQUEST, TODO_REQUEST, UPDATE_TODO_REQUEST} from "./actionTodoType";
import { ProjectsFailure, TodosSuccessCreate} from "../project/actionProjectCreator";
import {ADD_TODO_IN_PROJECT_REQUEST} from "../project/actionProjectType";
import {TodoInterfaceInProject} from "../project/projectTypes";



function* todoSaga(action:any) {
    try {
        const response: TodoInterface = yield call(findTodoById, {
            accessToken: action.payload.accessToken,
            id: action.payload.id,
        })
        yield put(
            TodoSuccess(response)
        )
        action.payload.callback(response)
    } catch (error) {
        yield put(
            TodoFailure(errorCatch(error))
        )
    }
}

export function* createTodoSaga(action:any) {
    try {
        const data: TodoInterfaceInProject = yield call(createTodo, {
            accessToken: action.payload.accessToken,
            projectId: action.payload.projectId,
            name: action.payload.name,
            description: action.payload.description,
            title: action.payload.title,
            status: action.payload.status,
            priority: action.payload.priority,
            dateCompleted: action.payload.dateCompleted,
            numeric: action.payload.numeric,
            filePath: action.payload.filePath})
        yield put(
            TodosSuccessCreate(data)
        )
    } catch (error) {
        yield put(
            TodoFailure(errorCatch(error))
        )
    }
}

export function* deleteTodoSaga(action:any) {
    try {
        yield call(deleteTodoById, {
            accessToken: action.payload.accessToken,
            todoId: action.payload.todoId})
        yield put(
            DeleteTodoFetchSuccess(action.payload)
        )
    } catch (error) {
        yield put(
            ProjectsFailure(errorCatch(error))
        )
    }
}

export function* updateTodoSaga(action:any) {
    try {
        yield call(changeTodoById, {
            accessToken: action.payload.accessToken,
            todoId: action.payload.todoId,
            name: action.payload.name,
            description: action.payload.description,
            title: action.payload.title,
            status: action.payload.status,
            priority: action.payload.priority,
            dateCompleted: action.payload.dateCompleted,
            numeric: action.payload.numeric,
            filePath: action.payload.filePath})
        yield put(
            UpdateTodoFetchSuccess(action.payload)
        )
    } catch (error) {
        yield put(
            ProjectsFailure(errorCatch(error))
        )
    }
}
export function* deleteTodoSagaWatcher(){
    yield all ([takeEvery(DELETE_TODO_REQUEST, deleteTodoSaga)])
}
export function* updateTodoSagaWatcher(){
    yield all ([takeEvery(UPDATE_TODO_REQUEST, updateTodoSaga)])
}

export function* createTodoSagaWatcher(){
    yield all ([takeEvery(ADD_TODO_IN_PROJECT_REQUEST, createTodoSaga)])
}

export function* todoFetchSagaWatcher(){
    yield all ([takeEvery(TODO_REQUEST, todoSaga)])
}