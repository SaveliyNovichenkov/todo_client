import { getContentType } from '../../../utils/api.utils'
import {UserInterfaceForAuth} from "../../../interfaces/user.interface";
import axios from "axios";
import {API} from "../../../helpers/API";
import {ResponseGenerator} from "../../../interfaces/responseGenerator";


export const CustomAxios = axios.create({
    baseURL: API.baseUrl,
    headers: getContentType()
})


export const register = async (payload: { email: string, password: string }) => {
    const response: ResponseGenerator =  await axios.post(API.auth.register, {
        email: payload.email,
        password: payload.password
    }, {
        headers: {
            "Content-Type":"application/json",
            Accept: "application/json"
        }
    })
    return response.data
}

export const login = async (payload: { email: string, password: string }) => {
    const response: ResponseGenerator= await axios.post(API.auth.login, {
        email: payload.email,
        password: payload.password
    }, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })
    return response.data
}


export const saveTokenAndId = (response:UserInterfaceForAuth) => {
    localStorage.setItem('accessToken', response.accessToken)
    localStorage.setItem('id', response.user.id.toString())
}

export const logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('id')
}
