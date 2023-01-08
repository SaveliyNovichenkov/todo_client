
export interface AuthState {
    isLoading: boolean,
    error: null,
    accessToken: string,
    id: string
}

export interface AuthPayload {
    values: {email: string, password: string}
}

export interface AuthSuccessPayload {
    accessToken: string
    id: string
}

export interface AuthFailurePayload {
    error: string
}
