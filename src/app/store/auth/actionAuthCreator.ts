import * as actions from "./actionAuthType";
import {
    AUTH_FAILURE,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT
} from "./actionAuthType";
import {AuthFailurePayload, AuthPayload, AuthSuccessPayload} from "./authTypes";


export const AuthRequest = (payload: AuthPayload): actions.AuthRequest => ({
    type: AUTH_REQUEST, payload
})

export const AuthSuccess = (payload: AuthSuccessPayload): actions.AuthSuccess => ({
    type: AUTH_SUCCESS, payload
})

export const AuthFailure = (payload: AuthFailurePayload): actions.AuthFailure => ({
    type: AUTH_FAILURE, payload
})

export const LoginRequest = (payload: AuthPayload): actions.LoginRequest => ({
    type: LOGIN_REQUEST, payload
})

export const LoginSuccess = (payload: AuthSuccessPayload): actions.LoginSuccess => ({
    type: LOGIN_SUCCESS, payload
})

export const LoginFailure = (payload: AuthFailurePayload): actions.LoginFailure => ({
    type: LOGIN_FAILURE, payload
})

export const Logout = (): actions.Logout => ({
    type: LOGOUT
})