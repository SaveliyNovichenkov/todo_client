import { all, fork, take } from "redux-saga/effects";
import authSaga from "./auth/authSaga";
import projectsSaga, {
    deleteProject,
    projectCreate,
    projectsByIdSaga,
    updateProject
} from "./project/projectSaga";
import {
    createTodoSagaWatcher,
    deleteTodoSagaWatcher,
    todoFetchSagaWatcher,
    updateTodoSagaWatcher
} from "./todo/todoSaga";



export default function* rootSaga() {
    yield all([ fork(authSaga), fork(projectsSaga),
        fork(projectsByIdSaga), fork(projectCreate),
        fork(deleteProject), fork(updateProject),
        fork(todoFetchSagaWatcher), fork(createTodoSagaWatcher),
        fork(updateTodoSagaWatcher), fork(deleteTodoSagaWatcher),
    ])
}

