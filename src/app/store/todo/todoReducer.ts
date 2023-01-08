import {ProjectState} from "../project/projectTypes";
import {TodoState} from "./todoTypes";
import * as actions from "./actionTodoType";
import {CREATE_TODO_SUCCESS} from "./actionTodoType";


const initialState: TodoState = {
    isLoading: false,
    error: null,
    todos: []
}


const todoReducer =
    (state: TodoState = initialState, action: actions.todoAction):TodoState => {
        switch (action.type) {
            case actions.TODO_REQUEST: {
                return {
                    ...state,
                    isLoading: true
                }
            }
            case actions.TODO_SUCCESS_REQUEST: {
                return {
                    ...state,
                    isLoading: false,
                    todos: [...state.todos, action.payload]
                }
            }
            case actions.TODO_FAILURE_REQUEST: {
                return {
                    ...state,
                    isLoading: false,
                    todos: [],
                    error: action.payload
                }
            }
            case actions.CREATE_TODO_REQUEST: {
                return {
                    ...state,
                    isLoading: true
                }
            }
            case actions.CREATE_TODO_SUCCESS: {
                return {
                    ...state,
                    isLoading: false,
                    todos: [...state.todos, action.payload]
                }
            }
            case actions.UPDATE_TODO_REQUEST: {
                return {
                    ...state,
                    isLoading: true
                }
            }
            case actions.UPDATE_TODO_SUCCESS: {
                return {
                    ...state,
                    isLoading: false,
                    todos: [...state.todos.map(todo =>
                        todo.id === action.payload.id ?
                            {...todo, description: action.payload.description,
                                name: action.payload.name,
                                title: action.payload.title,
                                status: action.payload.status,
                                priority: action.payload.priority,
                                dateCompleted: action.payload.dateCompleted,
                                filePath: action.payload.filePath,
                                numeric: action.payload.numeric}
                            : todo)]
                }
            }
            case actions.DELETE_TODO_REQUEST: {
                return {
                    ...state,
                    isLoading: true
                }
            }
            case actions.DELETE_TODO_SUCCESS: {
                return {
                    ...state,
                    isLoading: false,
                    todos: [...state.todos.filter((todo) => {return todo.id != action.payload.id})]
                }
            }
            default:
                return {
                    ...state
                }

        }
}

export default todoReducer