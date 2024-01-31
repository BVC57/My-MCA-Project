import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Box } from "@mui/material";
import CommanTableGrid from "src/components/comman-component/CommanTableGrid";
import ActionIcon from "src/assets/svg/downloadIcon";
import CommonHeader from "src/components/comman-component/CommonHeader";
import BuCreateForm from "./BuCreateForm";

const useStyles = makeStyles(() => ({
  companySetupContainer: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#fff",
    borderRadius: "15px",
  },
  bgCard: {
    margin: "30px 0px 0px 0",
    width: "100%",
    maxWidth: "100%",
    flexBasis: "100%",
  },
  tableHeader: {
    backgroundColor: "#248e38",
    padding: "39px 72px 44px 39px",
  },
}));
const rows = [
  {
    id: 1,
    col1: "tata123",
    col2: "tata",
    col3: "sup123",
    col4: "reg",
    col5: "mnc",
    col6: "8574968574",
    col7: "mnc@gmail.com",
    col8: "tata@gmail.com",
    col9: "navi mumbai",
    col10: "mumbai",
    col11: "558866"
  },
  {
    id: 2,
    col1: "samsung453",
    col2: "samsung",
    col3: "smg123",
    col4: "reg",
    col5: "rakesh",
    col6: "7744488574",
    col7: "rakesh@gmail.com",
    col8: "samsung@gmail.com",
    col9: "surat",
    col10: "gujrat",
    col11: "668877"
  },
  {
    id: 3,
    col1: "asus587",
    col2: "asus",
    col3: "asus123",
    col4: "reg",
    col5: "mohini",
    col6: "8577558579",
    col7: "mohini@gmail.com",
    col8: "asus@gmail.com",
    col9: "dubai",
    col10: "dubai",
    col11: "45876"
  },
  {
    id: 4,
    col1: "apple321",
    col2: "apple",
    col3: "apple123",
    col4: "reg",
    col5: "mical",
    col6: "14568574",
    col7: "mical@gmail.com",
    col8: "apple@gmail.com",
    col9: "mumbai",
    col10: "mumbai",
    col11: "558866"
  },
  {
    id: 5,
    col1: "redbus345",
    col2: "redbus",
    col3: "rb123",
    col4: "reg",
    col5: "nitu",
    col6: "8587468574",
    col7: "nitu@gmail.com",
    col8: "redbus@gmail.com",
    col9: "heydrabad",
    col10: "heydrabad",
    col11: "335588"
  },
  {
    id: 6,
    col1: "kia309",
    col2: "kia",
    col3: "kia123",
    col4: "reg",
    col5: "raju",
    col6: "6874968574",
    col7: "raju@gmail.com",
    col8: "kia@gmail.com",
    col9: "ahemdabad",
    col10: "gujrat",
    col11: "332510"
  },
  {
    id: 7,
    col1: "fogg45",
    col2: "fogg",
    col3: "fogg123",
    col4: "reg",
    col5: "nidhi",
    col6: "774468574",
    col7: "nidhi@gmail.com",
    col8: "fogg@gmail.com",
    col9: "bangalor",
    col10: "banglor",
    col11: "887745"
  },
  {
    id: 8,
    col1: "tatanue123",
    col2: "tata",
    col3: "sup123",
    col4: "reg",
    col5: "sivraj",
    col6: "8574968574",
    col7: "sivraj@gmail.com",
    col8: "tata@gmail.com",
    col9: "navi mumbai",
    col10: "mumbai",
    col11: "558866"
  },
  
];

const columns = [
  { field: "id", hide: true },
  { field: "col1", headerName: "Company Code ", width: 150 },
  { field: "col2", headerName: "Company Name", width: 100 },
  { field: "col3", headerName: "Supplier Code ", width: 150 },
  { field: "col4", headerName: "Category", width: 100 },
  { field: "col5", headerName: "Supplier Name", width: 150 },
  { field: "col6", headerName: "Mobile No", width: 100 },
  { field: "col7", headerName: "Mailing ID", width: 150 },
  { field: "col8", headerName: "User Mailing ID ", width: 100 },
  { field: "col9", headerName: "Address", width: 150 },
  { field: "col10", headerName: "Place", width: 100 },
  { field: "col11", headerName: "Pin code", width: 150 },
  {
    field: "col11",
    headerName: "Actions",
    width: 100,
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api = params.api;
        const thisRow = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return (
        <Box onClick={(e) => onClick(e)} className="editIconAction">
          <ActionIcon />
        </Box>
      );
    },
  },
];
export default function BU() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const handleFormOpen = () => {
    setIsOpen(true);
  };

  return (
    <Grid container className={classes.companySetupContainer}>
      <Grid item xs={8} className={classes.bgCard}>
        <Box className={classes.tableHeader}>
          <CommonHeader
            headerTitle={"SUPPLIER"}
            handleFormOpen={handleFormOpen}
          >
            <BuCreateForm open={isOpen} onClose={handleClose} />
          </CommonHeader>
        </Box>
        <Box>
          <CommanTableGrid rows={rows} columns={columns} />
        </Box>
      </Grid>
    </Grid>
  );
}
