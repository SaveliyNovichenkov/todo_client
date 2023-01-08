import {combineReducers} from "redux";
import isLoadingReducer from "./reducers/isLoadingReducer";
import errorReducer from "./reducers/errorReducer";
import authReducer from "./auth/authReducer";
import projectReducer from "./project/projectReducer";
import todoReducer from "./todo/todoReducer";
import subtaskReducer from "./subtasks/subtaskReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    projects: projectReducer,
    todos: todoReducer,
    subtask: subtaskReducer,
    isLoading: isLoadingReducer,
    error: errorReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer