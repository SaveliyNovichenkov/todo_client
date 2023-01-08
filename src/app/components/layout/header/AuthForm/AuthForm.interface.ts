import React from "react";
import {SubmitHandler} from "react-hook-form";
import {AuthPayload} from "../../../../store/auth/authTypes";


export interface AuthFormInterface {
    ref: any
    onSubmit: SubmitHandler<AuthPayload>
    emailRef: React.MutableRefObject<HTMLInputElement>
    passwordRef: React.MutableRefObject<HTMLInputElement>
    handleAuth: (authType:'login' | 'register') => void
    isLoading: boolean
}
