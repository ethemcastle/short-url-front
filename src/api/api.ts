import axios from "axios";

// const baseURL = process.env.NODE_ENV === "development" ? `http://localhost:8081` : `https://short-url-nyztj.ondigitalocean.app`
const baseURL = `https://short-url-nyztj.ondigitalocean.app`
const api = axios.create({baseURL});

export const add = async (url: string): Promise<string> => {
    const response = await api.post("/add", url, {
        headers: {
            "Content-Type": "text/plain"
        }
    });
    return response.data;
}

export const get = async (id: string): Promise<string> => {
    const response = await api.get(`/${id}`);
    return response.data;
};
