import { Box, Typography } from '@mui/material';
import ReactHighCharts from 'react-highcharts';
// import
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

// ----------------------------------------------------------------------
const useStyles = makeStyles(() => ({
  chartContainerBox: {
    border: '1px solid #DFE0EB',
    position:'relative',
    width:'100%'
  },
  VisulizationHeading: {
    fontWeight: 500,
    fontSize: '36px',
    lineHeight: '10px',
    position: 'absolute',
    top: '-19px',
    left: '16px'
  },
  chartInnerWrapper: {
    padding: '46px',
    width:'auto'
    
  }
}));
const config = {
  chart: {
    type: 'column',
    style: {
      fontFamily: 'Arial'
    }
  },
   title: {
    text: 'Year 2022-2023'
  },
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
    type: "bar"
  },
  title: {
    text: 'Year 2022-2023'
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
const options1 = {
  chart: {
    type: "pie"
  },
  title: {
    text: 'Year 2022-2023'
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

const options2 = {
  chart: {
    type: "area"
  },
  title: {
    text: 'Year 2022-2023'
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

export default function Report() {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.chartContainerBox)}>
      <Typography
        component="h2"
        className={clsx(classes.VisulizationHeading)}
        sx={{ color: 'primary.dark' }}
      >
        Report For The Company
      </Typography>
      <Box className={clsx(classes.chartInnerWrapper)}>
      <Typography >Colum Chart View</Typography>
        <ReactHighCharts config={config} sx={{ width: '100%' }} />
      </Box>
      <Box className={clsx(classes.chartInnerWrapper)}>
        <Typography >Bar Chart View</Typography>
      <ReactHighCharts config={options} sx={{ width: '150%' }} />
      </Box>
      <Box className={clsx(classes.chartInnerWrapper)}>
        <Typography >Pie Chart View</Typography>
      <ReactHighCharts config={options1} sx={{ width: '150%' }} />
      </Box>
      <Box className={clsx(classes.chartInnerWrapper)}>
        <Typography >Scatter Chart View</Typography>
      <ReactHighCharts config={options2} sx={{ width: '150%' }} />
      </Box>
      
    </Box>
  );
}
