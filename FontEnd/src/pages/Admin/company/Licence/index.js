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
    col1: "bmw",
    col2: "rse123ww",
    col3: "business",
    col4: "10/02/2023",
    col5: "america",
    col6: "500000",
    col7: "10/02/2024",
    col8: "this is car",
    col9: "UK",
  },
  {
    id: 2,
    col1: "tata nano",
    col2: "sded23ww",
    col3: "business",
    col4: "12/02/2023",
    col5: "india",
    col6: "2000000",
    col7: "11/02/2024",
    col8: "this is car",
    col9: "india",
  },
  {
    id: 3,
    col1: "adani",
    col2: "adani33w",
    col3: "business",
    col4: "5/02/2023",
    col5: "gujrat",
    col6: "3000000",
    col7: "10/02/2024",
    col8: "this is color",
    col9: "india",
  },
  {
    id: 4,
    col1: "syk led",
    col2: "sky23led",
    col3: "business",
    col4: "10/02/2023",
    col5: "mumbai",
    col6: "2000000",
    col7: "10/02/2024",
    col8: "this is led",
    col9: "india",
  },
  {
    id: 5,
    col1: "syk led",
    col2: "sky23led",
    col3: "business",
    col4: "10/02/2023",
    col5: "mumbai",
    col6: "100000",
    col7: "10/02/2024",
    col8: "this is led",
    col9: "india",
  },
   {
    id: 5,
    col1: "adani power",
    col2: "adani33w",
    col3: "business",
    col4: "5/02/2023",
    col5: "punjab",
    col6: "400000",
    col7: "10/02/2024",
    col8: "this is color",
    col9: "india",
  },
  {
    id: 6,
    col1: "adani",
    col2: "adani33w",
    col3: "business",
    col4: "5/02/2023",
    col5: "delhi",
    col6: "200000",
    col7: "10/02/2024",
    col8: "this is color",
    col9: "india",
  },
];

const columns = [
  { field: "id", hide: true },
  { field: "col1", headerName: "Company Name", width: 150 },
  { field: "col2", headerName: "License No", width: 100 },
  { field: "col3", headerName: "License type", width: 150 },
  { field: "col4", headerName: "Date of Issuance", width: 100 },
  { field: "col5", headerName: "Port of Registration", width: 150 },
  { field: "col6", headerName: "License Value (Rs.) ", width: 100 },
  { field: "col7", headerName: "Validity", width: 150 },
  { field: "col8", headerName: "Item Description", width: 100 },
  { field: "col9", headerName: "Country of Origin", width: 150 },
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
            headerTitle={"LICENCE"}
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
