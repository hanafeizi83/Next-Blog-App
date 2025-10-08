import http from "./httpServices";

export async function signupApi(data) {
    return await http.post('/user/signup', data).then(({ data }) => data.data)
}

export async function signinApi(data) {
    return await http.post('/user/signin', data).then(({ data }) => data.data)
}

export async function getUserApi() {
    return await http.get('/user/profile').then(({ data }) => data.data)
}

export async function getAllUsersApi(options) {
    return await http.get('/user/list',options).then(({ data }) => data.data)
}