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
    col1: "DHS2352",
    col2: "Honda",
    col3: "honda123",
    col4: "Bike",
    col5: "honda",
    col6: "two whiler bike",
    col7: "yes",
    col8: "20%",
    col9: "5%",
    col10: "8%",
    col11: "4%"
  },
  {
    id: 2,
    col1: "rdf2352",
    col2: "delux",
    col3: "delux123",
    col4: "Bike",
    col5: "delux",
    col6: "two whiler bike",
    col7: "yes",
    col8: "15%",
    col9: "7%",
    col10: "6%",
    col11: "5%"
  },
  {
    id: 3,
    col1: "KKR343",
    col2: "skoda",
    col3: "skoda123",
    col4: "fourwheel",
    col5: "skoda",
    col6: " fourwhiler",
    col7: "yes",
    col8: "30%",
    col9: "15%",
    col10: "18%",
    col11: "14%"
  },
  {
    id: 4,
    col1: "tat342",
    col2: "tata",
    col3: "tata123",
    col4: "truck",
    col5: "tata",
    col6: "heavy truck",
    col7: "yes",
    col8: "30%",
    col9: "20%",
    col10: "10%",
    col11: "15%"
  },
  {
    id: 5,
    col1: "nokia3211",
    col2: "nokia",
    col3: "nokia123",
    col4: "phone",
    col5: "nokia",
    col6: "smartphone",
    col7: "yes",
    col8: "10%",
    col9: "5%",
    col10: "4%",
    col11: "3%"
  },
  {
    id: 6,
    col1: "skyled367",
    col2: "skyled",
    col3: "sky123",
    col4: "led",
    col5: "skyled",
    col6: "electronic",
    col7: "yes",
    col8: "15%",
    col9: "5%",
    col10: "8%",
    col11: "4%"
  },
  {
    id: 7,
    col1: "hevals435",
    col2: "hevals",
    col3: "hevals123",
    col4: "fan",
    col5: "hevals",
    col6: "elctronic",
    col7: "yes",
    col8: "12%",
    col9: "5%",
    col10: "4%",
    col11: "2%"
  },
  {
    id: 8,
    col1: "DHS2352",
    col2: "Honda",
    col3: "honda123",
    col4: "Bike",
    col5: "honda",
    col6: "two whiler bike",
    col7: "yes",
    col8: "20%",
    col9: "5%",
    col10: "8%",
    col11: "4%"
  }
  
];

const columns = [
  { field: "id", hide: true },
  { field: "col1", headerName: "Company Code", width: 150 },
  { field: "col2", headerName: "Company Name", width: 100 },
  { field: "col3", headerName: "Product Code", width: 150 },
  { field: "col4", headerName: "Category", width: 100 },  
  { field: "col5", headerName: "ProductName", width: 150 },
  { field: "col6", headerName: "Product Description ", width: 100 },
  { field: "col7", headerName: "Stock Type", width: 150 },
  { field: "col8", headerName: "Total GST Rate ", width: 100 },
  { field: "col9", headerName: "CGST Rate", width: 150 },
  { field: "col10", headerName: "SGST Rate", width: 100 },
  { field: "col11", headerName: "IGST Rate", width: 150 },
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
            headerTitle={"PRODUCT"}
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
