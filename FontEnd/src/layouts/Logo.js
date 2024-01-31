// material
import { Box, Typography } from '@mui/material';
// import
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import logo from '../assets/images/LOGO.jpg';
import { Navigate, useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------
const useStyles = makeStyles(() => ({
  logoImageBox: {
    width: 200,
    height:90,
   
  }
}));

export default function Logo() {
  const classes = useStyles();
  let navigate=useNavigate();
  async function sp(url){
    window.onclick=url;
  }
  return (
    <Box display="flex" alignItems="center" position="relative"  onClick={sp("https://mobifly.tech")}>
      <Box component="img" src={logo} className={clsx(classes.logoImageBox)} />
      {/* <Typography  sx={{ color: 'text.secondary' }} className="logo-text">
        Navigate Customs & Trade
      </Typography> */}
    </Box>
  );
}
