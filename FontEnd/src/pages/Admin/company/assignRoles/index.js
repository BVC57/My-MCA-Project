import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Box } from "@mui/material";
import CommanTableGrid from "src/components/comman-component/CommanTableGrid";
import ActionIcon from "src/assets/svg/actionIcon";
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
    col1: "bvc123",
    col2: "bvc",
    col3: "bvcgstin",
    col4: "bvc1",
    col5: "vallbhi"
  },
  {
    id: 2,
    col1: "bhadresh",
    col2: "tata",
    col3: "tatagstin",
    col4: "tatasub",
    col5: "mumbai"
  },
  {
    id: 3,
    col1: "mahesh",
    col2: "silverdum",
    col3: "sdgstin",
    col4: "silver1",
    col5: "gujrat"
  },
  {
    id: 4,
    col1: "steave",
    col2: "dragon",
    col3: "drggstin",
    col4: "dragonmain",
    col5: "nepal"
  },
];

const columns = [
  { field: "id", hide: true },
  { field: "col1", headerName: "User login id", width: 150 },
  { field: "col2", headerName: "Company Name", width: 100 },
  { field: "col3", headerName: "GSTIN", width: 150 },
  { field: "col4", headerName: "BU", width: 100 },
  { field: "col5", headerName: "Location", width: 100 },
 
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
            headerTitle={"ASSIGN ROLE"}
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
