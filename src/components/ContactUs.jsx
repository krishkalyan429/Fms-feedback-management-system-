import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Image from "../../images/Training.jpg";


// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& h1": {
//       color: "brown",
//     },
//     "& h2": {
//       color: "darkgoldenrod",
//     },

//     height: "100vh",
//   },
  // image: {
  //   backgroundImage: `url(${Image})`,
  //     backgroundRepeat: 'no-repeat',
  //     backgroundColor:
  //       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center',
  // },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
 
 
// }));

 export default function contactUs() {

  return (
    <Box 
    textAlign="center">

      {/* <Grid container component="main" className={classes.root}  >
        <Grid item xs={12} sm={6}  m={20} style={{justifyContent:'center'}}/>
        <Grid item sm={6}> */}
          <div  textAlign="center" style={{padding:"200px"}}>
          <style>{'body { background: linear-gradient(lightgreen,#003300); }'}</style>
            <h1 style={{color:"#663300"}} >CONTACT US</h1>
            <form  noValidate>
              <Typography textAlign="center" style={{fontfamily:"Times New Roman"}}>
                {" "}
                <b>
                   Name: FMS Team
                </b>
              </Typography>
              
              <br />
              <Typography textAlign="center" style={{fontfamily:"Times New Roman"}}>
              <b>Contact: +91 9898765431</b>
              </Typography>
              <br/>
              <Typography textAlign="center" style={{fontfamily:"Times New Roman"}}>
              <b>Email: fmsteam2021@gmail.com</b>
              </Typography>
              
            </form>
          </div>
        {/* </Grid>
      </Grid> */}
    </Box>
  );
}

