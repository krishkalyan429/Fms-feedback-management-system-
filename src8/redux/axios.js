import axios from 'axios';


export default axios.create({
    baseURL: 'http://localhost:9177/api/pay/card'
})