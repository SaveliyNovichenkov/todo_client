import {createSelector} from "reselect";
import {AuthState} from "./authTypes";



const getLoading = (state: AuthState) => state.isLoading
const getToken = (state: AuthState) => state.accessToken
const getError = (state: AuthState) => state.error

export const getAuthSelector = createSelector(getToken,(token) => token)
export const getErrorSelector = createSelector(getError,(error) => error)
export const getLoadingSelector = createSelector(getLoading,(isLoading) => isLoading)