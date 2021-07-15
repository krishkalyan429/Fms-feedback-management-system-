import {
  Typography,
  TextField,
  InputLabel,
  FormControl,
  Select,
  makeStyles,
  Grid,
  Paper,
  Button,
} from "@material-ui/core";
import React from "react";

// Styles
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textFieldStyle: {
    marginBottom: 20,
  },
}));

// Functional component
const Register = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    role: "",
    name: "hai",
  });

  // handle change method
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <Typography variant="h5" style={{ marginTop: "70px" }}>
        Register Page
      </Typography>
      <Grid
        item
        md={6}
        style={{
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Paper elevation={3} style={{ padding: "30px" }}>
          <form>
            <TextField
              id="outlined-basic"
              label="Fullname"
              placeholder="Enter your full name"
              variant="outlined"
              fullWidth
              className={classes.textFieldStyle}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              placeholder="Enter email"
              variant="outlined"
              type="email"
              fullWidth
              className={classes.textFieldStyle}
            />
            <TextField
              id="outlined-basic"
              label="Mobile No"
              placeholder="Enter mobile number"
              variant="outlined"
              fullWidth
              className={classes.textFieldStyle}
            />
            <TextField
              id="outlined-basic"
              label="User Id"
              placeholder="Enter user id"
              variant="outlined"
              fullWidth
              className={classes.textFieldStyle}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              placeholder="Enter password"
              variant="outlined"
              type="password"
              fullWidth
              className={classes.textFieldStyle}
            />
            <FormControl
              variant="filled"
              fullWidth
              className={classes.formControl}
              className={classes.textFieldStyle}
            >
              <InputLabel htmlFor="filled-age-native-simple">Role</InputLabel>
              <Select
                native
                value={state.role}
                onChange={handleChange}
                inputProps={{
                  name: "role",
                  id: "filled-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" fullWidth>
              Register
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default Register;
