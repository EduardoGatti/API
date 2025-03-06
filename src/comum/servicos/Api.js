import axios from "axios";

const instaciaApi = axios.create({
    baseURL: "mysql://root:sOhxxsQNuZQsOPvSfRedyLLNFrVnZsZI@trolley.proxy.rlwy.net:42849/railway"
})

export default instaciaApi;