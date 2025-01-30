import axios from "axios";

const Api = axios.create({
    baseURL: "http://laravelapi.test/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default Api;