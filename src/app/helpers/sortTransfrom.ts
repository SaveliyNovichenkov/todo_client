import { TodoInterfaceInProject } from "app/store/project/projectTypes"

export const transformStatus = (status: "queue" | "development" | "done") => {
    if(status == "queue") {return 3}
    if(status == "development") {return 2}
    if(status == "done") {return 1}
    return 0
}
export const transformPriority = (priority:  "low" | "medium" | "maximum") => {
    if(priority == "low") {return 3}
    if(priority == "medium") {return 2}
    if(priority == "maximum") {return 1}
    return 0
}
export const sortTodosByStatusFunction = (todos: TodoInterfaceInProject[]) => {
    todos.sort(function(a, b){
            return transformStatus(a.status) - transformStatus(b.status)
        })
    return todos
}

export const sortTodosByPriorityFunction = (todos: TodoInterfaceInProject[]) => {
    todos.sort(function(a, b){
        return  transformPriority(a.priority) - transformPriority(b.priority)
    })
    return todos
}