import {all, call, put, take, takeEvery, takeLatest} from "redux-saga/effects";
import {errorCatch} from "../../utils/api.utils";
import {
    CREATE_PROJECTS_REQUEST,
    DELETE_PROJECT_REQUEST,
    PROJECT_BY_ID_REQUEST,
    PROJECTS_REQUEST,
    UPDATE_PROJECT_REQUEST
} from "./actionProjectType";
import {
    changeProjectById,
    createProject,
    deleteProjectById,
    findProjectById,
    findProjectsByUserId
} from "../services/project/project.service";
import {
    DeleteProjectSuccess,
    ProjectByIdFailure,
    ProjectByIdSuccess,
    ProjectsFailure,
    ProjectsSuccess,
    ProjectsSuccessCreate,
    UpdateProjectSuccess
} from "./actionProjectCreator";
import {ProjectById, ProjectByToken,} from "./projectTypes";


function* projectSaga(action:any) {
    try {
        const response: ProjectByToken[] = yield call(findProjectsByUserId, {
            id: action.payload.id,
            accessToken: action.payload.accessToken,
        })
        yield put(
            ProjectsSuccess(response)
        )
    } catch (error) {
        yield put(
            ProjectsFailure(errorCatch(error))
        )
    }
}

function* projectByIdSaga(action:any) {
    try {
        const response: ProjectById = yield call(findProjectById, {
            id: action.payload,
        })
        yield put(
            ProjectByIdSuccess(response)
        )
    } catch (error) {
        yield put(
            ProjectByIdFailure(errorCatch(error))
        )
    }
}

export function* createProjectSaga(action:any) {
      try {
          const data: ProjectByToken = yield call(createProject, {
              accessToken: action.payload.accessToken,
              description: action.payload.description,
              name: action.payload.name})
          yield put(
              ProjectsSuccessCreate(data)
          )
      } catch (error) {
          yield put(
              ProjectsFailure(errorCatch(error))
          )
      }
}

export function* deleteProjectSaga(action:any) {
      try {
          yield call(deleteProjectById, {
              accessToken: action.payload.accessToken,
              id: action.payload.id})
          yield put(
              DeleteProjectSuccess(action.payload)
          )
      } catch (error) {
          yield put(
              ProjectsFailure(errorCatch(error))
          )
      }
}

export function* updateProjectSaga(action:any) {
      try {
          yield call(changeProjectById, {
              accessToken: action.payload.accessToken,
              id: action.payload.id,
              name: action.payload.name,
              description: action.payload.description
          })
          yield put(
              UpdateProjectSuccess(action.payload)
          )
      } catch (error) {
          yield put(
              ProjectsFailure(errorCatch(error))
          )
      }
}



export function* updateProject(){
    yield all([takeEvery(UPDATE_PROJECT_REQUEST, updateProjectSaga)])
}


export function* deleteProject(){
    yield all([takeEvery(DELETE_PROJECT_REQUEST, deleteProjectSaga)])
}

export function* projectCreate(){
    yield all([takeEvery(CREATE_PROJECTS_REQUEST, createProjectSaga)])
}

export function* projectsByIdSaga(){
    yield all ([takeEvery(PROJECT_BY_ID_REQUEST, projectByIdSaga)])
}


function* projectsSaga(){
    yield all ([takeEvery(PROJECTS_REQUEST, projectSaga)])
}

export default projectsSaga