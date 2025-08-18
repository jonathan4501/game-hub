import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '268f6a18a36a4ce7a1f5867b3ec95c99',
    }
})