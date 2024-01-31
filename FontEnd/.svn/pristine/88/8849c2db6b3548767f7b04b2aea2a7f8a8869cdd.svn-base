import * as React from 'react';
import { Box,FormControl,Select,MenuItem,InputLabel } from '@mui/material';
// import
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import CurrencyDollar from 'src/assets/svg/currency-dollar';

// ----------------------------------------------------------------------
const useStyles = makeStyles(() => ({
    currencySelect: {
   fontFamily:'Arial',
   fontSize:'16px',
   lineHeight:'18px',
   fontWeight:400,
   color:'#2D2D2D',
   padding:'10px 11px'
  }
}));

export default function CurrencySelect() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
  return (
    <Box sx={{ minWidth: 86 }}>
    <FormControl fullWidth> 
    <InputLabel id="currency-select">
    <CurrencyDollar/>

    </InputLabel>
      <Select
        id="currency-select"
        value={currency}
        onChange={handleChange}
      >
        <MenuItem value={'Default'} className={clsx(classes.currencySelect)}>Default</MenuItem>
        <MenuItem value={'Millions'} className={clsx(classes.currencySelect)}>Millions</MenuItem>
        <MenuItem value={'Billions'} className={clsx(classes.currencySelect)}>Billions</MenuItem>
        <MenuItem value={'Lakhs'} className={clsx(classes.currencySelect)}>Lakhs</MenuItem>
        <MenuItem value={'Crores'} className={clsx(classes.currencySelect)}>Crores</MenuItem>
      </Select>
    </FormControl>
  </Box>
  );
}
