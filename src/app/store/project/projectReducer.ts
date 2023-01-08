import {ProjectState} from "./projectTypes";
import * as actions from "./actionProjectType";
import {
    sortTodosByPriorityFunction,
    sortTodosByStatusFunction,
    transformPriority,
    transformStatus
} from "../../helpers/sortTransfrom";


const initialState: ProjectState = {
    isLoading: false,
    error: null,
    projects: [],
    project: {
        id: 0,
        createdAt: "",
        updatedAt: "",
        name: "",
        description: "",
        todos: []
    }
}



const projectReducer =
    (state: ProjectState = initialState, action: actions.projectAction):ProjectState => {
    switch (action.type) {
        case actions.PROJECT_BY_ID_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case actions.PROJECT_BY_ID_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                project: action.payload
            }
        }
        case actions.ADD_TODO_IN_PROJECT_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case actions.ADD_TODO_IN_PROJECT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                project: {...state.project, todos: [...state.project.todos, action.payload]}
            }
        }
        case actions.PROJECTS_REQUEST: {
           return {
               ...state,
               isLoading: true
           }
        }
        case actions.PROJECTS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                projects: action.payload
            }
        }
        case actions.CREATE_PROJECTS_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case actions.PROJECTS_SUCCESS_CREATE: {
            return {
                ...state,
                isLoading: false,
                projects: [...state.projects, action.payload]
            }
        }
        case actions.UPDATE_PROJECT_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case actions.UPDATE_PROJECT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                projects: [...state.projects.map(project =>
                    project.id === action.payload.id ?
                        {...project, name: action.payload.name,
                            description: action.payload.description}
                        : project)]
            }
        }
        case actions.DELETE_PROJECT_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case actions.DELETE_PROJECT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                projects: [...state.projects.filter((project) => {return project.id != action.payload.id})]
            }
        }
        case actions.PROJECTS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                projects: [],
                error: action.payload
            }
        }
        case actions.PROJECT_BY_ID_FAILURE: {
            return {
                ...state,
                isLoading: false,
                projects: [],
                error: action.payload
            }
        }
        default:
            return {
                ...state
            }
    }
}

export default projectReducer