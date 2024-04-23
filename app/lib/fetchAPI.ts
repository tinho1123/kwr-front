<<<<<<< HEAD
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
=======
export const fetchAPI = async <T>(path:String, config?: RequestInit): Promise<T> => {
    const apiHost:String = (process.env.API_HOST as String) ?? 'http://localhost:3333';
    const res = await fetch(`${apiHost}${path}`, config);
    return res.json();
}
>>>>>>> master
