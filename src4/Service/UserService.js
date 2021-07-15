import axios from 'axios';
const USER_API_BASE_URL="http://localhost:9194/rest/users";
class UserService{
    ValidateLogin(){
        return axios.get(USER_API_BASE_URL);
    }
   
    }
    export default new UserService()