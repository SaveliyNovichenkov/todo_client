import {ResponseGenerator} from "../../../interfaces/responseGenerator";
import axios from "axios";
import {API} from "../../../helpers/API";


export const findProjectsByToken = async (payload: {accessToken: string}) => {
    const response: ResponseGenerator= await axios.get(API.user.userFindProjects, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Authorization": `Bearer ${payload.accessToken}`
        }
    })
    return response.data
}

export const findProjectById = async (payload: {id: number}) => {
    const response: ResponseGenerator= await axios.get(API.project.getById + `${payload.id}`, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    })
    return response.data
}

export const findProjectsByUserId = async (payload: {id: number, accessToken: string}) => {
    const response: ResponseGenerator= await axios.get(API.project.getAllByUserId + `${payload.id}`, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Authorization": `Bearer ${payload.accessToken}`
        }
    })
    return response.data
}

export const createProject = async (payload: {accessToken: string, name: string, description: string}) => {
    const response: ResponseGenerator= await axios.post(API.project.create, {
        description: payload.description,
        name: payload.name
    },{
        headers: {
            "Content-Type":"application/json",
            Accept: "application/json",
            "Authorization": `Bearer ${payload.accessToken}`
        }
    })
    return response.data
}

export const changeProjectById = async (payload: {accessToken: string, name: string, description: string, id: number}) => {
    const response: ResponseGenerator= await axios.put(API.project.updateById + `${payload.id}`, {
        description: payload.description,
        name: payload.name
    },{
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Authorization": `Bearer ${payload.accessToken}`
        }
    })
    return response.data
}

export const deleteProjectById = async (payload: {accessToken: string, id: number}) => {
    const response: ResponseGenerator= await axios.delete(API.project.deleteById + `${payload.id}`, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Authorization":` Bearer ${payload.accessToken}`
        }
    })
    return response.data
}