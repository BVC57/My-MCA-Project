import * as React from 'react';
import { Paper,TableContainer,Table,TableHead,TableRow,TableCell,TableBody, TableFooter } from '@mui/material';
// import
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

// ----------------------------------------------------------------------
const useStyles = makeStyles(() => ({
    VisulizationTableContainer: {
        border: '1px solid #dedede',
        borderRadius:0,
        marginTop:'30px',
        width:'669px',
        height:'338px',
        margin:'auto'
  },
}));
const columns = [
    { id: 'name', label: 'Entities' },
    { id: 'code', label: 'Total Assessable Value', align: 'right', minWidth: 100, },
    {
      id: 'population',
      label: '% contribution',
      align: 'right',
      minWidth: 100,
    },
    {
      id: 'size',
      label: 'Duty involved',
       align: 'right',
       minWidth: 100,
    },
    {
      id: 'density',
      label: '% contribution',
      align: 'right',
      minWidth: 100,
    },
  ];
  function createData(name, code, population, size,density) {
    return { name, code, population, size, density };
  }
  
  const rows = [
    createData('Entity A', '1,000,000.00', 3.45, '10,000.00',3.45),
    createData('Entity B', '3,000,000.00', 10.34, '30,000.00',10.34),
    createData('Entity C', '600,000.00', 20.69, '60,000.00',20.69),
    createData('Entity D', '800,000.00', 27.59, '80,000.00',27.59),
    createData('Entity E', '1,100,000.00', 37.93, '110,000.00',37.93),
  ];

export default function VisulizationTable() {
  const classes = useStyles();
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }} className={clsx(classes.VisulizationTableContainer)}>
      <TableContainer sx={{ maxHeight: 340 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice().map((row) => 
                 (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                )
              )}
          </TableBody>
          <TableFooter>
              <TableRow>
                  <TableCell>
                  Total
                  </TableCell>
                  <TableCell align='right'>
                  2,900,000.00
                  </TableCell>
                  <TableCell align='right'>
                  100.00
                  </TableCell>
                  <TableCell align='right'>
                  290,000.00
                  </TableCell>
                  <TableCell align='right'>
                  100.00
                  </TableCell>
              </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      
    </Paper>
  );
}
