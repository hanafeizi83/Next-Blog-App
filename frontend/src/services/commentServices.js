import http from "./httpServices";

export async function createCommentApi(data, options={}) {
    return await http.post('/comment/add', data, options).then(({ data }) => data.data);
}
export async function getAllCommentsApi(options) {
    return await http.get('/comment/list', options).then(({ data }) => data.data);
}

export async function deleteCommentApi(commentId, options) {
    return await http.delete(`/comment/remove/${commentId}`, options).then(({ data }) => data.data);
}

export async function editCommentApi({ commentId, data }, options) {
    return await http.patch(`/comment/update/${commentId}`, data, options).then(({ data }) => data.data);
}