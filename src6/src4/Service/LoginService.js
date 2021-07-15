import axios from 'axios';

const LOGIN_API_BASE_URL = 'http://localhost:9194';
class LoginService{


    validateAdmin(emailId,password){
        return axios.get(LOGIN_API_BASE_URL+'/api/v1/candidate/login/'+emailId+'/'+password);
    }

    validateUser(emailId,password){
        return axios.get(LOGIN_API_BASE_URL+'/api/v1/voter/login/'+emailId+'/'+password);
    }

}
export default new LoginService()