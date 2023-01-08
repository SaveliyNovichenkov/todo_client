import {UserInterface} from "../../../interfaces/user.interface";
import {CustomAxios} from "../auth/auth.service";

export const USER = 'user'
export const UserService = {
    async getAll() {
        return CustomAxios.get<UserInterface[]>(`/${USER}`)
    },
    async getUser(id: number) {
        return CustomAxios.get<UserInterface>(`/${USER}/by-id/${id}`)
    }
}