import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8081/fms/v1'
 });