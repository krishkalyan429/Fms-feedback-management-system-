import axios from 'axios';
export const loginAction = (user) => async (dispatch) => {
  const result = await axios.post("http://localhost:8082/login", user);
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "LOGIN",
    payload: result.data,
  });
};

export const logoutAction = (userId) => async (dispatch) => {
  const result = await axios.patch(`http://localhost:8082/logout/${userId}`);
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "LOGOUT",
    payload: result.data,
  });
};