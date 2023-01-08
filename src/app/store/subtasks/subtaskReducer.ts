import {TodoState} from "../todo/todoTypes";
import { SubtaskState } from "./subtaskTypes";
import * as actions from "./actionSubtaskType";

const initialState: SubtaskState = {
    isLoading: false,
    error: null,
    subtasks: [],
    subtask: {
        id: null,
        createdAt: null,
        updatedAt: null,
        name:  null,
        description: null,
        status: null,
        todo: {
            id:  null
        }
    }
}

const subtaskReducer =
    (state: SubtaskState = initialState, action: actions.subtaskAction):SubtaskState => {
        switch (action.type) {
            case actions.SUBTASK_CREATE_REQUEST: {
                return {
                    ...state,
                    isLoading: true
                }
            }
            case actions.SUBTASK_SUCCESS_REQUEST: {
                return {
                    ...state,
                    isLoading: false,
                    subtask: action.payload
                }
            }
            case actions.SUBTASK_FAILURE_REQUEST: {
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload
                }
            }
            default:
                return {
                    ...state
                }

        }
    }

export default subtaskReducer