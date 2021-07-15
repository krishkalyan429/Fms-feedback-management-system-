import { Typography, Container } from "@material-ui/core";
import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {logoutAction} from '../actions/loginAction'

const Logout = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state)=> state.account.userId);

  useEffect(()=>{
    dispatch(logoutAction(userId))
  }, [])
  return (
    <Container>
      <Typography variant="h3" style={{ marginTop: "70px" }}>
        Logged Out Successfully!
      </Typography>
    </Container>
  );
};

export default Logout;
