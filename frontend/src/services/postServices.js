import http from "./httpServices";

export async function getPostsApi(options, query) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${query}`, options);
    const { data } = await res.json();
    const { posts } = data || {};
    return posts;
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