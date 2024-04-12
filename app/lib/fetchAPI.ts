export const fetchAPI = (path:String, config?: RequestInit): Promise<Response> => {
    const apiHost:String = (process.env.API_HOST as String);
    return fetch(`${apiHost}${path}`,config);
}