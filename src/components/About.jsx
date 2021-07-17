import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Image from "../../images/Training.jpg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
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
    <Box >
      <Grid container component="main" className={classes.root} >
        <Grid item xs={12} sm={6}  m={20} style={{justifyContent:'center'}}/>
        <Grid item sm={6}>
          <div className={classes.paper}>
            <h1>ABOUT US</h1>
            <h2>Welcome to Courses!</h2>
            <form className={classes.form} noValidate>
              <Typography align="justify">
                {" "}
                We are the Largest online course Provider in Hyderabad since
                2006. We started running the online training from 2006 and we
                open the new training batches almost every year. Now, 100
                faculties and 150 supporting staff work together and always
                support about 10 thousand participants, the best thing about
                this app is the ease at which user can access it.
              </Typography>
              <br />
              <Typography align="justify">
                All of our courses are certification courses. That means we have
                enough power to support participants and satisfactory track
                records of participants.
              </Typography>
            </form>
          </div>
        </Grid>
      </Grid>
      <Copyright />
    </Box>
  );
}

