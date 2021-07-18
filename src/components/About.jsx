import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Image from "../../images/Training.jpg";

function Copyright() {
  return (
    <Typography variant="body2" style={{color:"black"}} align="center">
      {"Copyright © "}
      <Link style={{color:"black"}} href="http://localhost:3000/">
        FMS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& h1": {
      color: "brown",
    },
    "& h2": {
      color: "darkgoldenrod",
    },

    height: "100vh",
  },
  // image: {
  //   backgroundImage: `url(${Image})`,
  //     backgroundRepeat: 'no-repeat',
  //     backgroundColor:
  //       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center',
  // },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
 
 
}));

 export default function About() {
  const classes = useStyles();

  return (
    <Box 
    textAlign="center">

      {/* <Grid container component="main" className={classes.root}  >
        <Grid item xs={12} sm={6}  m={20} style={{justifyContent:'center'}}/>
        <Grid item sm={6}> */}
          <div className={classes.paper} textAlign="center" style={{padding:"50px"}}>
          <style>{'body { background: linear-gradient(lightgreen,#003300); }'}</style>
            <h1 style={{color:"#663300"}} >ABOUT US</h1>
            <h2 style={{color:"#FF0066"}}>Welcome to Courses!</h2>
            <form className={classes.form} noValidate>
              <Typography textAlign="center" style={{fontfamily:"Times New Roman"}}>
                {" "}
                <b>We are the Largest online course Provider in Hyderabad from
                2021 January. We started running the online training from 2021 and we
                open the new training batches almost this year. Now, 100
                faculties and 150 supporting staff work together and always
                support about 10 thousand participants, the best thing about
                this app is the ease at which user can access it.
                </b>
              </Typography>
              <br />
              <Typography align="justify">
                <b>
                All of our courses are certification courses. That means we have
                enough power to support participants and satisfactory track
                records of participants.
                </b>
              </Typography>
            </form>
          </div>
        {/* </Grid>
      </Grid> */}
      <Copyright />
    </Box>
  );
}

