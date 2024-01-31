// material
import {
  Box,
  Grid,
  InputLabel,
  Typography,
  Link,
  Button,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
// import
import logo from "../assets/images/LOGO.jpg";
import LoginLockIcon from "src/assets/svg/loginLockIcon";
import Reg from './Register';
import { borderRadius, flexbox, shadows } from "@mui/system";
import { Navigate, useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------
const useStyles = makeStyles(() => ({
  // 1:color:abdca7,2-color:248e38,3-color:afd91a,4-color:323232
  LoginContainer: {
    backgroundColor:"#248e38",
    padding: "10px 5px",
  },
  pbody:{

    boxSizing:"border-box",
    height:200
  },
  loginHeading: {
    fontFamily: "Arial",
    fontWeight: 400,
    fontSize: "35px",
    lineHeight: "50px",
    color: "#212121",
  },
  logoWrapper: {
    textAlign: "center",
    height: "100vh",
    position: "relative",
    backgroundColor:"#abdca7"
  },
  logoImage: {
    margin: "auto",
    height:"300px",
    width:"400px",
    borderRadius:"10%"
  },
  footerText: {
    fontFamily: "Arial",
    fontWeight:"300",
    fontSize: "20px",
    lineHeight: "34px",
    color: "#000",
    maxWidth: "1051px",
    textAlign: "center",
    marginBottom: "44px",
    position: "absolute",
    bottom: "0",
   marginRight:"10px",
  },
  footerLink: {
    textDecoration: "none",
    color: "blue",
  },
  logoInnerSize: { padding: "50px 0" },
  welcomeHeading: {
    fontFamily: "Arial",
    fontWeight:"bold",
    fontSize: "30px",
    lineHeight: "43.3px",
    color: "#FFFFFF",
    marginBottom: "30px",
    marginTop:"20px",
    marginLeft:"70px",
  },
  loginFieldBox: {
    backgroundColor: "#FFFFFF",
    padding: "40px 60px",
    margin:"30px",
    borderRadius:"15px",
    
  },
  loginText: {
    fontFamily: "Arial",
    fontWeight: 400,
    fontSize: "36px",
    lineHeight: "50px",
    color: "#000"
  },
  loginIconText: {
    display: "flex",
    alignItems: "center",
    marginLeft:"70px",
    marginBottom:"10px",
    
  },
  inputLabelText: {
    fontFamily: "Arial",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "43px",
    color: "#000",
  },
  loginField: {
    borderBottom: "1px solid #EB8C00",
    marginBottom: "7px",
    maxWidth: "530px",
    width: "100%",
  },
  forgotLink: {
    fontFamily: "Arial",
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "43px",
    color: "blue",
    textDecoration: "none",
    marginLeft:"40px",
    
  },
  continueBtn: {
    backgroundColor: "#E0301E",
    fontFamily: "Arial",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "43px",
    color: "#fff",
    borderRadius:3,
    padding: "10.5px 44px",
    marginTop: "19px",
    marginLeft:"50px"
  },
  hr:{
    backgroundColor:"white",
    height:"5px",
    
  }
}));

export default function Login() {
  const classes = useStyles();
  let navigate=useNavigate();
  function newreg(e){
    navigate("/");
  }
  return (
    <Box className={classes.pbody}>
      <Grid container>
        <Grid item xs={7.32}>
          <Box className={classes.logoWrapper}>
            <Box className={classes.logoInnerSize}>
              <img src={logo} alt="login_logo" className={classes.logoImage} />
              <Typography component="h1" className={classes.loginHeading}>
              Document Parshing system
              </Typography>
            </Box>
            <p className={classes.footerText}>
              © 2023 Mobifly Private Limited (a limited liability
              company in India). All rights reserved.<br/>
               ‘Mobifly’ refers to the India
              member firm and may sometimes refer to the network.<br/><hr className={classes.hr}/> Please see{" "}
              <a
                href="https://www.pwc.com/structure"
                target="_blank"
                className={classes.footerLink}
              >
                www.mobifly.com{" "}
              </a>{" "}
              for further details.
            </p>
          </Box>
        </Grid>
        <Grid item xs={4.68}>
          <Box className={classes.LoginContainer}>
            <Typography component="h1" className={classes.welcomeHeading}>
              Welcome to <br/>Document Parshing system
            </Typography>
            <Box className={classes.loginFieldBox}>
              <Box className={classes.loginIconText}>
                <LoginLockIcon />
                <Typography
                  component="h2"
                  className={classes.loginText}
                  sx={{ ml: "11px" }}
                >
                  Login
                </Typography>
              </Box>
              <Box>
                <InputLabel className={classes.inputLabelText}>
                  Username
                </InputLabel>
                <FormControl variant="outlined" className={classes.loginField}>
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />
                </FormControl>
                <InputLabel className={classes.inputLabelText}>
                  Password
                </InputLabel>
                <FormControl variant="outlined" className={classes.loginField}>
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />
                </FormControl>
              </Box>
              <Box>
                <Button className={classes.continueBtn} id="continue-btn" onClick={newreg}>
                  Continue
                </Button><br/>
                <Link href="/reg" className={classes.forgotLink}>
                Please Register Here
              </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
