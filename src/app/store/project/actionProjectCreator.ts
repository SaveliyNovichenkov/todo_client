import * as actions from "./actionProjectType";
import {
    ADD_TODO_IN_PROJECT_REQUEST,
    ADD_TODO_IN_PROJECT_SUCCESS,
    CREATE_PROJECTS_REQUEST,
    DELETE_PROJECT_REQUEST,
    DELETE_PROJECT_SUCCESS,
    PROJECT_BY_ID_FAILURE,
    PROJECT_BY_ID_REQUEST,
    PROJECT_BY_ID_SUCCESS,
    PROJECTS_FAILURE,
    PROJECTS_REQUEST,
    PROJECTS_SUCCESS,
    PROJECTS_SUCCESS_CREATE,
    UPDATE_PROJECT_REQUEST,
    UPDATE_PROJECT_SUCCESS
} from "./actionProjectType";
import {
    DeletePayload,
    ProjectById,
    ProjectByToken,
    ProjectDto,
    ProjectRequestPayload,
    TodoDto,
    TodoInterfaceInProject,
    UpdatePayload
} from "./projectTypes";

export const UpdateProject = (payload: UpdatePayload): actions.UpdateProject => ({
    type: UPDATE_PROJECT_REQUEST, payload
})

export const UpdateProjectSuccess = (payload: UpdatePayload): actions.UpdateProjectSuccess => ({
    type: UPDATE_PROJECT_SUCCESS, payload
})

export const DeleteProject = (payload: DeletePayload): actions.DeleteProject => ({
    type: DELETE_PROJECT_REQUEST, payload
})

export const DeleteProjectSuccess = (payload: DeletePayload): actions.DeleteProjectSuccess => ({
    type: DELETE_PROJECT_SUCCESS, payload
})

export const CreateProjectRequest = (payload: ProjectDto): actions.CreateProjectRequest => ({
    type: CREATE_PROJECTS_REQUEST, payload
})

export const ProjectsSuccessCreate = (payload: ProjectByToken): actions.ProjectsSuccessCreate => ({
    type: PROJECTS_SUCCESS_CREATE, payload
})

export const ProjectsRequest = (payload: ProjectRequestPayload): actions.ProjectsRequest => ({
    type: PROJECTS_REQUEST, payload
})

export const ProjectsSuccess = (payload: ProjectByToken[]): actions.ProjectsSuccess => ({
    type: PROJECTS_SUCCESS, payload
})

export const ProjectsFailure = (payload: string | null): actions.ProjectsFailure => ({
    type: PROJECTS_FAILURE, payload
})

export const ProjectByIdRequest = (payload:number): actions.ProjectByIdRequest => ({
    type: PROJECT_BY_ID_REQUEST, payload
})

export const ProjectByIdSuccess = (payload: ProjectById): actions.ProjectByIdSuccess => ({
    type: PROJECT_BY_ID_SUCCESS, payload
})

export const ProjectByIdFailure = (payload: string | null): actions.ProjectByIdFailure => ({
    type: PROJECT_BY_ID_FAILURE, payload
})

export const CreateTodoRequest = (payload: TodoDto): actions.AddTodoInProjectRequest => ({
    type: ADD_TODO_IN_PROJECT_REQUEST, payload
})

export const TodosSuccessCreate = (payload: TodoInterfaceInProject): actions.AddTodoInProjectSuccess => ({
    type: ADD_TODO_IN_PROJECT_SUCCESS, payload
})



