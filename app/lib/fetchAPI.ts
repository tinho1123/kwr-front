export const fetchAPI = async <T>(path:String, config?: RequestInit): Promise<T> => {
    const apiHost:String = (process.env.API_HOST as String) ?? 'http://localhost:3333';
    const res = await fetch(`${apiHost}${path}`, config);
    return res.json();
}