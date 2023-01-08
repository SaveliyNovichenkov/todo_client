export const API = {
    baseUrl: process.env.REACT_APP_URI + '/api',
    auth: {
        login: process.env.REACT_APP_URI + '/api/auth/login',
        register: process.env.REACT_APP_URI + '/api/auth/register'
    },
    user: {
        userGetProfileById: process.env.REACT_APP_URI + '/api/user/by-id/',
        userFindProjects: process.env.REACT_APP_URI + '/api/user/find/projects',
        userUpdateInfo: process.env.REACT_APP_URI + '/api/user/',
        userProfileByToken: process.env.REACT_APP_URI + '/api/user/profile',
    },
    project: {
        getAll:process.env.REACT_APP_URI + '/api/project',
        getAllByUserId:process.env.REACT_APP_URI + '/api/user/find/projects/by-id/',
        create:process.env.REACT_APP_URI + '/api/project',
        getById:process.env.REACT_APP_URI + '/api/project/by-id/',
        deleteById:process.env.REACT_APP_URI + '/api/project/',
        updateById:process.env.REACT_APP_URI + '/api/project/',
    },
    todo: {
        getAll:process.env.REACT_APP_URI + '/api/todo',
        create:process.env.REACT_APP_URI + '/api/todo/',
        getById:process.env.REACT_APP_URI + '/api/todo/by-id/',
        deleteById:process.env.REACT_APP_URI + '/api/todo/',
        updateById:process.env.REACT_APP_URI + '/api/todo/',
    },
    subtask: {
        getAll:process.env.REACT_APP_URI + '/api/subtask',
        create:process.env.REACT_APP_URI + '/api/subtask/',
        getById:process.env.REACT_APP_URI + '/api/subtask/by-id/',
        deleteById:process.env.REACT_APP_URI + '/api/subtask/',
        updateById:process.env.REACT_APP_URI + '/api/subtask/',
    },
    comment: {
        getAll:process.env.REACT_APP_URI + '/api/comment',
        create:process.env.REACT_APP_URI + '/api/comment',
        getById:process.env.REACT_APP_URI + '/api/comment/by-id/',
        deleteById:process.env.REACT_APP_URI + '/api/comment/',
        updateById:process.env.REACT_APP_URI + '/api/comment/',
    },
    media: {
        create: process.env.REACT_APP_URI + '/api/media',
    }
};