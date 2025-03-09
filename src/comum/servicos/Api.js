import axios from "axios";

const instaciaApi = axios.create({
    // baseURL: 'http://localhost:3000',
    baseURL: "https://banco-de-dados-api-4z97.onrender.com"
})

export default instaciaApi;