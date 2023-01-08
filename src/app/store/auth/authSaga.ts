import {all, call, put, takeLatest} from "redux-saga/effects"
import {login, register, saveTokenAndId} from "../services/auth/auth.service";
import {AuthFailure, AuthSuccess, LoginSuccess, LoginFailure} from "./actionAuthCreator";
import {errorCatch} from "../../utils/api.utils";
import {LOGIN_REQUEST, AUTH_REQUEST, LOGIN_SUCCESS} from "./actionAuthType";
import {UserInterfaceForAuth} from "../../interfaces/user.interface";


function* registerSaga(action:any) {

    try {
        const response: UserInterfaceForAuth = yield call(register, {
            email: action.payload.values.email,
            password: action.payload.values.password,
        })
        yield call(saveTokenAndId, response)
        yield put(
            AuthSuccess({
                accessToken: response.accessToken,
                id: response.user.id.toString()
            })
        )
    } catch (error) {
        yield put(
            AuthFailure({
                error: errorCatch(error)
            })
        )
    }
}

function* loginSaga(action:any) {
    try {
        const response: UserInterfaceForAuth = yield call(login, {
            email: action.payload.values.email,
            password: action.payload.values.password,
        })
        yield call(saveTokenAndId, response)

        yield put(
            LoginSuccess({
                accessToken: response.accessToken,
                id: response.user.id.toString()
            })
        )
        action.payload.callback(response.accessToken)
    } catch (error) {
        yield put(
            LoginFailure({
                error: errorCatch(error)
            })
        )
    }
}




function* authSaga(){
    yield all ([takeLatest(AUTH_REQUEST, registerSaga)])
    yield all ([takeLatest(LOGIN_REQUEST, loginSaga)])

}

export default authSaga