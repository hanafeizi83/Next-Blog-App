export default function setCookieOnReq(cookie) {
    const accessToken = cookie.get('accessToken');
    const refreshToken = cookie.get('refreshToken');

    const options = {
        method: 'GET',
        credentials: 'include',
        headers: {
            Cookie: `${accessToken?.name}=${accessToken?.value};${refreshToken?.name}=${refreshToken?.value};`
        }
    }
    return options;
}