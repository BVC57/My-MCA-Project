// material
import { Box, Button, Typography, Tooltip, IconButton } from '@mui/material';
// import
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import InfoIcon from '../../assets/svg/infoIcon';


// ----------------------------------------------------------------------
const useStyles = makeStyles(() => ({
  cardDetailsBox: {
    border: '2px solid #C4C4C4',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    padding: '18px 17px 12px 11px',
    width: '220px',
    height: '220px',
    marginRight: '45px',
    marginTop: '47px',
    cursor: 'pointer',
    position: 'relative',
    backgroundColor:'#abdca7'
  },
  cardDetailsHeader: {
    fontFamily: 'Helvetica Neue',
    fontSize: '26px',
    lineHeight: '30px',
    textAlign: 'left',
    fontWeight: '700'
  },
  cardDetailsCaption: {
    fontFamily: 'Arial',
    fontSize: '24px',
    lineHeight: '28px',
    textAlign: 'left',
    fontWeight: '700',
    padding: '37px 0'
  },
  cardDetailsViewButton: {
    fontSize: '12px',
    lineHeight: '14px',
    fontFamily: 'Arial',
    color: '#fff',
    padding: '7px 12px',
    borderRadius:'2px',
    backgroundColor:'#abdca7'
  },
  // cardDetailsHoverEffect:{
  //   cursor:"move",
  //   opacity:"0.5",
  // }
}));
export default function CardDetails() {
  const classes = useStyles();
  return (
    <>
    
      <Box className={clsx(classes.cardDetailsBox)}>
        <Typography className={clsx(classes.cardDetailsHeader)} component="h3">
          Import
        </Typography>
        <Typography className={clsx(classes.cardDetailsCaption)} component="h3">
          
        </Typography><br/>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Button variant="contained" className={clsx(classes.cardDetailsViewButton)}>
            View more
          </Button>
          <Tooltip title="Info">
            <IconButton sx={{ padding: '0' }}>
              <InfoIcon/>
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Typography component="span" className="cardDetailsHoverText">
            Value of imports during the selected period
          </Typography>
        </Box>
      </Box>
      <Box className={clsx(classes.cardDetailsBox)}>
        <Typography className={clsx(classes.cardDetailsHeader)} component="h3">
          Import/Export licence
        </Typography>
        <Typography className={clsx(classes.cardDetailsCaption)} component="h3">
          
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Button variant="contained" className={clsx(classes.cardDetailsViewButton)} >
            View more
          </Button>
          <Tooltip title="Info">
            <IconButton sx={{ padding: '0' }}>
              <InfoIcon/>
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Typography component="span" className="cardDetailsHoverText">
            Value of imports during the selected period
          </Typography>
        </Box>
      </Box>
      <Box className={clsx(classes.cardDetailsBox)}>
        <Typography className={clsx(classes.cardDetailsHeader)} component="h3">
          Export
        </Typography>
        <Typography className={clsx(classes.cardDetailsCaption)} component="h3">
          
        </Typography><br/>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Button variant="contained" className={clsx(classes.cardDetailsViewButton)}>
            View more
          </Button>
          <Tooltip title="Info">
            <IconButton sx={{ padding: '0' }}>
              <InfoIcon/>
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Typography component="span" className="cardDetailsHoverText">
            Value of imports during the selected period
          </Typography>
        </Box>
      </Box>
      <Box className={clsx(classes.cardDetailsBox)}>
        <Typography className={clsx(classes.cardDetailsHeader)} component="h3">
          Custom Duty Payble
        </Typography>
        <Typography className={clsx(classes.cardDetailsCaption)} component="h3">
        
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Button variant="contained" className={clsx(classes.cardDetailsViewButton)}>
            View more
          </Button>
          <Tooltip title="Info">
            <IconButton sx={{ padding: '0' }}>
              <InfoIcon/>
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Typography component="span" className="cardDetailsHoverText">
            Value of imports during the selected period
          </Typography>
        </Box>
      </Box>
      <Box className={clsx(classes.cardDetailsBox)}>
        <Typography className={clsx(classes.cardDetailsHeader)} component="h3">
          Export Realistaion
        </Typography>
        <Typography className={clsx(classes.cardDetailsCaption)} component="h3">
          
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Button variant="contained" className={clsx(classes.cardDetailsViewButton)}>
            View more
          </Button>
          <Tooltip title="Info">
            <IconButton sx={{ padding: '0' }}>
              <InfoIcon/>
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Typography component="span" className="cardDetailsHoverText">
            Value of imports during the selected period
          </Typography>
        </Box>
      </Box>
      <Box className={clsx(classes.cardDetailsBox)}>
        <Typography className={clsx(classes.cardDetailsHeader)} component="h3">
          BOE Filled
        </Typography>
        <Typography className={clsx(classes.cardDetailsCaption)} component="h3">
          
        </Typography><br/>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Button variant="contained" className={clsx(classes.cardDetailsViewButton)}>
            View more
          </Button>
          <Tooltip title="Info">
            <IconButton sx={{ padding: '0' }}>
              <InfoIcon/>
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Typography component="span" className="cardDetailsHoverText">
            Value of imports during the selected period
          </Typography>
        </Box>
      </Box>
      {/* <Box className={clsx(classes.cardDetailsBox)}>
        <Typography className={clsx(classes.cardDetailsHeader)} component="h3">
          Import/Export licence
        </Typography>
        <Typography className={clsx(classes.cardDetailsCaption)} component="h3">
          4/8
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Button variant="contained" className={clsx(classes.cardDetailsViewButton)}>
            View more
          </Button>
          <Tooltip title="Info">
            <IconButton sx={{ padding: '0' }}>
              <InfoIcon/>
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Typography component="span" className="cardDetailsHoverText">
            Value of imports during the selected period
          </Typography>
        </Box>
      </Box>
      <Box className={clsx(classes.cardDetailsBox)}>
        <Typography className={clsx(classes.cardDetailsHeader)} component="h3">
          Import/Export licence
        </Typography>
        <Typography className={clsx(classes.cardDetailsCaption)} component="h3">
          4/8
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Button variant="contained" className={clsx(classes.cardDetailsViewButton)}>
            View more
          </Button>
          <Tooltip title="Info">
            <IconButton sx={{ padding: '0' }}>
              <InfoIcon/>
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Typography component="span" className="cardDetailsHoverText">
            Value of imports during the selected period
          </Typography>
        </Box>
      </Box>
      <Box className={clsx(classes.cardDetailsBox)}>
        <Typography className={clsx(classes.cardDetailsHeader)} component="h3">
          Import/Export licence
        </Typography>
        <Typography className={clsx(classes.cardDetailsCaption)} component="h3">
          4/8
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Button variant="contained" className={clsx(classes.cardDetailsViewButton)}>
            View more
          </Button>
          <Tooltip title="Info">
            <IconButton sx={{ padding: '0' }}>
              <InfoIcon/>
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Typography component="span" className="cardDetailsHoverText">
            Value of imports during the selected period
          </Typography>
        </Box> */}
      {/* </Box> */}
    </>
  );
}
