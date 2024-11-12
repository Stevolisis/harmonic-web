const { default: axios } = require("axios");

export const api = axios.create({
    baseURL: "http://localhost:3000/api",
    // baseURL: "https://mechanicapi.carmagard.com/api/v1",
});