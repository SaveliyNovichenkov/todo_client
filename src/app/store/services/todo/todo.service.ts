
import {ResponseGenerator} from "../../../interfaces/responseGenerator";
import axios from "axios";
import {API} from "../../../helpers/API";
import {TodoDto} from "../../todo/todoTypes";


export const findTodoById = async (payload: {id: number, accessToken: string}) => {
    const response: ResponseGenerator= await axios.get(API.todo.getById + `${payload.id}`, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Authorization": `Bearer ${payload.accessToken}`
        }
    })
    return response.data
}

export const createTodo = async (payload: TodoDto) => {
    const response: ResponseGenerator= await axios.post(API.todo.create+ `${payload.projectId}`, {
        description: payload.description,
        name: payload.name,
        title: payload.title,
        status: payload.status,
        priority: payload.priority,
        dateCompleted: payload.dateCompleted,
        numeric: payload.numeric,
        filePath: payload.filePath
    },{
        headers: {
            "Content-Type":"application/json",
            Accept: "application/json",
            "Authorization": `Bearer ${payload.accessToken}`
        }
    })
    return response.data
}



export const changeTodoById = async (payload: {accessToken: string,
    name: string, description: string, todoId: number, title: string, status: 'queue' | 'development' | 'done',
    priority: 'low' | 'medium' | 'maximum', dateCompleted: number, filePath: string, numeric: number }) => {
    const response: ResponseGenerator= await axios.put(API.todo.updateById + `${payload.todoId}`, {
        description: payload.description,
        name: payload.name,
        title: payload.title,
        status: payload.status,
        priority: payload.priority,
        dateCompleted: payload.dateCompleted,
        filePath: payload.filePath,
        numeric: payload.numeric
    },{
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Authorization": `Bearer ${payload.accessToken}`
        }
    })
    return response.data
}

export const deleteTodoById = async (payload: {accessToken: string, todoId: number}) => {
    const response: ResponseGenerator= await axios.delete(API.todo.deleteById + `${payload.todoId}`, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Authorization":` Bearer ${payload.accessToken}`
        }
    })
    return response.data
}