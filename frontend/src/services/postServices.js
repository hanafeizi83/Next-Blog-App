import http from "./httpServices";

export async function getPostsApi(options, query) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${query}`, options);
    const { data } = await res.json();
    const { posts, totalPages } = data || {};
    return { posts, totalPages };
}

export async function getBlogBySlugApi(slug, options) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`, options);
    const { data } = await res.json();
    const { post: blog } = data || {}
    return blog
}

export function likeBlogApi(blogId) {
    return http.post(`/post/like/${blogId}`).then(({ data }) => data.data);
}

export function bookmarkBlogApi(blogId) {
    return http.post(`/post/bookmark/${blogId}`).then(({ data }) => data.data);
}

export function createBlogApi(data) {
    return http.post(`/post/create`, data).then(({ data }) => data.data);
}

export function editBlogApi({ blogId, data }) {
    return http.patch(`/post/update/${blogId}`, data).then(({ data }) => data.data);
}

export function deleteBlogApi(blogId, options) {
    return http.delete(`/post/remove/${blogId}`, options).then(({ data }) => data.data);
}

export function getBlogById(blogId, options) {
    return http.get(`/post/${blogId}`, options).then(({ data }) => data.data);
}