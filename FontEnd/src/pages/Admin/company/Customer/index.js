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
    col1: "bvc1210",
    col2: "BVC",
    col3:"ASW124",
    col4:"abc123gstin",
    col5:"bvc",
    col6:"9988665544",
    col7:"vallbhi",
    col8:"bhavnagar",
    col9:"554422",
    col10:"gujrat",
    col3:"India",
  },
  {
    id: 2,
    col1: "honda4532",
    col2: "honda",
    col3:"honda124",
    col4:"honda123gstin",
    col5:"ravi",
    col6:"745865544",
    col7:"pune",
    col8:"mumbai",
    col9:"254422",
    col10:"mumbai",
    col3:"India",
  },
  {
    id: 3,
    col1: "hp453",
    col2: "hp",
    col3:"hp124",
    col4:"hp123gstin",
    col5:"nitu",
    col6:"684665544",
    col7:"banglor",
    col8:"banglor",
    col9:"884755",
    col10:"banglor",
    col3:"India",
  },
  {
    id: 4,
    col1: "lenovo3w2",
    col2: "lenovo",
    col3:"lnv332",
    col4:"lenovo123gstin",
    col5:"ruhi",
    col6:"784505544",
    col7:"kolkata",
    col8:"bangal",
    col9:"998822",
    col10:"bangal",
    col3:"India",
  },
  {
    id: 5,
    col1: "asian1210",
    col2: "asian",
    col3:"AS124",
    col4:"asin123gstin",
    col5:"mihir",
    col6:"9988965544",
    col7:"surat",
    col8:"gujrat",
    col9:"886622",
    col10:"gujrat",
    col11:"India",
  },
  {
    id: 6,
    col1: "bmw1210",
    col2: "bmw",
    col3:"bmw124",
    col4:"bmw123gstin",
    col5:"rishi",
    col6:"9988665544",
    col7:"delhi",
    col8:"gurugram",
    col9:"587522",
    col10:"Delhi",
    col11:"India",
  },
  {
    id: 7,
    col1: "nano33",
    col2: "tata nono",
    col3:"india",
    col4:"tata123gstin",
    col5:"rahul",
    col6:"9988665544",
    col7:"pune",
    col8:"mumbai",
    col9:"554422",
    col10:"mumbai",
    col11:"India",
  },
 
];

const columns = [
  { field: "id", hide: true },
  { field: "col1", headerName: "Company Code ", width: 150 },
  { field: "col2", headerName: "Company Name", width: 100 },
  { field: "col3", headerName: "Customer Code", width: 150 },
  { field: "col4", headerName: "Customer GSTIN", width: 100 },
  { field: "col5", headerName: "Customer Name", width: 150 },
  { field: "col6", headerName: "Mobile No", width: 100 },
  { field: "col7", headerName: "Address1 ", width: 150 },
  { field: "col8", headerName: "Place", width: 100 },
  { field: "col9", headerName: "Pin code", width: 150 },
  { field: "col10", headerName: "State ", width: 100 },
  { field: "col11", headerName: "Country", width: 150 },

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
            headerTitle={"Customer"}
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
