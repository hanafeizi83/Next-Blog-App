import axios from "axios";

const BASE_URL = 'http://localhost:5000/api';
const app = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});

app.interceptors.response.use(
    res => res,
    err => {
        console.log(err);
        
        return Promise.reject(err)
    }
    )

const http = {
    get: app.get,
    post: app.post,
    put: app.put,
    patch: app.patch,
    delete: app.delete
}

export default http