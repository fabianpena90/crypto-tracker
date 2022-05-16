import axios from "axios";

const baseURL = "https://api.coingecko.com"

export const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
        }
})