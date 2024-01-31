import { Box, Typography } from '@mui/material';
import ReactHighCharts from 'react-highcharts';
// import
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

// ----------------------------------------------------------------------
const useStyles = makeStyles(() => ({
  chartContainerBox: {
    border: '1px solid #DFE0EB',
    margin: '46px 22px 0 0 ',
    position:'relative'
  },
  VisulizationHeading: {
    fontWeight: 500,
    fontSize: '36px',
    lineHeight: '43px',
    position: 'absolute',
    top: '-19px',
    left: '16px'
  },
  chartInnerWrapper: {
    padding: '46px 9px 37px 9px',
    
  }
}));
const config = {
  chart: {
    type: 'column',
    style: {
      fontFamily: 'Arial'
    }
  },
  title: null,
  xAxis: {
    lineWidth: 0,
    minorGridLineWidth: 0,
    lineColor: 'transparent',
    categories: ['GSTIN', 'COMPANY', 'BU', 'SBU', 'USER'],
    title: {
      text: null
    }
  },
  yAxis: {
    title: null,
  },
  series: [
    {
      data: [10000, 300, 6000, 8000, 1100],
      dataLabels: { enabled: true }
    }
  ]
};
const options = {
  chart: {
    type: "pie"
  },
  series: [
    {
      data: [
        {
          y:  60
        },
        {
          y: 50
        },
        {
          y: 30
        },
        {
          y: 20
        }
      ]
    }
  ]
};

export default function VisulizationData() {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.chartContainerBox)}>
      <Typography
        component="h2"
        className={clsx(classes.VisulizationHeading)}
        sx={{ color: 'primary.dark' }}
      >
        Visualisation Center
      </Typography>
      <Box className={clsx(classes.chartInnerWrapper)}>
        <ReactHighCharts config={config} sx={{ width: '100%' }} />
      </Box>
      <Box className={clsx(classes.chartInnerWrapper)}>
      <ReactHighCharts config={options} sx={{ width: '150%' }} />
      </Box>
      
    </Box>
  );
}
