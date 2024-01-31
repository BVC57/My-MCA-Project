// material
import { Grid } from '@mui/material';
// import
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
// components
import Page from '../../layouts/Page';
import CardDetails from './cardDetails';
import VisulizationData from './visulizationData';
import VisulizationTable from './visulizationTable';
import Data from '../../pages/Dashboard/Detail';

// ----------------------------------------------------------------------
const useStyles = makeStyles(() => ({
  insightContainer: {
    boxShadow: '0px 4px 10px black',
    backgroundColor: '#fff',
    display: 'flex'
  },
  insightContainerGrid: {
    margin: '0px 0px 31px 58px',
    padding: '0!important',
    
  }
}));
export default function InsightTabComponent() {
  const classes = useStyles();
  return (
    <Page title="Dashboard | Minimal-UI" parentTitle='Dashboard'>
      <Grid container className={clsx(classes.insightContainer)}>
         <Grid
          item
          xs={10}
          className={clsx(classes.insightContainerGrid)}
          display="flex"
          alignItems="center"
          flexWrap="wrap"
        >
          
          <CardDetails />
        </Grid> 
         <Grid>
          <VisulizationData />
          <VisulizationTable/>
        </Grid> 
      </Grid>
    </Page>
  );
}
