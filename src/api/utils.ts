import axios from "axios";

export const api = axios.create({
    baseURL: "http://5.180.138.37:3500/",
    responseType: "json"
});