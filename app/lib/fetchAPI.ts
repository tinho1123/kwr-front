export const fetchAPI = async (path:String, config?: RequestInit): Promise<Response> => {
    const apiHost:String = (process.env.API_HOST as String) ?? 'http://localhost:3333';
    return await fetch(`${apiHost}${path}`, config).then(json => json.json());
}