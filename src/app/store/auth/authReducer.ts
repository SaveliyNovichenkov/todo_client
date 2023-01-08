import * as actions from "./actionAuthType";
import {AuthState} from "./authTypes";

const initialState: AuthState = {
    isLoading: false,
    error: null,
    accessToken: "",
    id: ""
}

const authReducer =
    (state: AuthState = initialState, action: actions.authAction) => {
    switch (action.type) {
        case actions.AUTH_REQUEST:{
            return {
                ...state,
                isLoading: true
            }
        }
        case actions.AUTH_SUCCESS:{
            return {
                ...state,
                isLoading: false,
                error:null,
                accessToken: action.payload.accessToken,
                id:action.payload.id
            }
        }
        case actions.AUTH_FAILURE:{
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }
        case actions.LOGIN_REQUEST:{
            return {
                ...state,
                isLoading: true
            }
        }
        case actions.LOGIN_SUCCESS:{
            return {
                ...state,
                isLoading: false,
                error:null,
                accessToken: action.payload.accessToken,
                id: action.payload.id
            }
        }
        case actions.LOGIN_FAILURE:{
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }
        case actions.LOGOUT: {
            return {
                ...state,
                accessToken: "",
                id: ""
            }
        }
        default:
            return {
                ...state
            }
    }
}

export default authReducer