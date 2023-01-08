import {AuthFailurePayload, AuthPayload, AuthSuccessPayload} from "./authTypes";

export const AUTH_REQUEST = "AUTH_REQUEST"
export interface AuthRequest {
    type: typeof AUTH_REQUEST;
    payload: AuthPayload
}

export const AUTH_SUCCESS = "AUTH_SUCCESS"
export interface AuthSuccess {
    type: typeof AUTH_SUCCESS;
    payload: AuthSuccessPayload
}

export const AUTH_FAILURE = "AUTH_FAILURE"
export interface AuthFailure {
    type: typeof AUTH_FAILURE;
    payload: AuthFailurePayload
}

export const LOGIN_REQUEST = "LOGIN_REQUEST"
export interface LoginRequest {
    type: typeof LOGIN_REQUEST;
    payload: AuthPayload
}
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export interface LoginSuccess {
    type: typeof LOGIN_SUCCESS;
    payload: AuthSuccessPayload
}
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export interface LoginFailure {
    type: typeof LOGIN_FAILURE;
    payload: AuthFailurePayload
}

export const LOGOUT = "LOGOUT"
export interface Logout {
    type: typeof LOGOUT;
}




export type authAction =
    | AuthRequest
    | AuthSuccess
    | AuthFailure
    | LoginRequest
    | LoginSuccess
    | LoginFailure
    | Logout

