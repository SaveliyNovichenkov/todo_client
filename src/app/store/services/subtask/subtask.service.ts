import {ResponseGenerator} from "../../../interfaces/responseGenerator";
import axios from "axios";
import {API} from "../../../helpers/API";
import {SubtaskRequestDto, SubtaskUpdateDto} from "../../subtasks/subtaskTypes";

export const findSubtaskById = async (payload: {id: number, accessToken: string}) => {
    const response: ResponseGenerator= await axios.get(API.subtask.getById + `${payload.id}`, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Authorization": `Bearer ${payload.accessToken}`
        }
    })
    return response.data
}

export const createSubtask = async (payload: SubtaskRequestDto) => {
    const response: ResponseGenerator= await axios.post(API.subtask.create+ `${payload.todoId}`, {
        description: payload.description,
        name: payload.name,
        status: payload.status,
    },{
        headers: {
            "Content-Type":"application/json",
            Accept: "application/json",
            "Authorization": `Bearer ${payload.accessToken}`
        }
    })
    return response.data
}

export const updateSubtask = async (payload: SubtaskUpdateDto) => {
    const response: ResponseGenerator= await axios.post(API.subtask.updateById+ `${payload.subtaskId}`, {
        todoId: payload.todoId,
        description: payload.description,
        name: payload.name,
        status: payload.status,
    },{
        headers: {
            "Content-Type":"application/json",
            Accept: "application/json",
            "Authorization": `Bearer ${payload.accessToken}`
        }
    })
    return response.data
}

export const deleteSubtaskById = async (payload: {accessToken: string, subtaskId: number}) => {
    const response: ResponseGenerator= await axios.delete(API.subtask.deleteById + `${payload.subtaskId}`, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Authorization":` Bearer ${payload.accessToken}`
        }
    })
    return response.data
}