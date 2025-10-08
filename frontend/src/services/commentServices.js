import http from "./httpServices";

export async function createCommentApi(data, options) {
    return await http.post('/comment/add', data, options).then(({ data }) => data.data);
}
export async function getAllCommentsApi(options) {
    return await http.get('/comment/list', options).then(({ data }) => data.data);
}