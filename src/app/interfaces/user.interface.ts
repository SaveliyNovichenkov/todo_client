export interface Project {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
}

export interface Comment {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    message: string;
}

export interface UserInterface {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    name: string;
    avatarPath: string;
    projects?: Project[];
    comments?: Comment[];
}

export interface UserDto {
    email: string;
    password: string;
    name?: string;
    avatarPath?: string;
}

export interface UserInterfaceForAuth {
    user: {
        id: number
        email: string
    };
    accessToken: string;
}


export interface AuthInterface {
    email: string
    password: string
}


