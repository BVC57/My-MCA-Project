import React,{useState} from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Box } from "@mui/material";
import CommonHeader from "src/components/comman-component/CommonHeader";
import CommanTableGrid from "src/components/comman-component/CommanTableGrid";
import ActionIcon from "src/assets/svg/actionIcon";
import GstCreateForm from "./gstCreateForm";

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
const rows= [
  { id: 1, col1: "ABC Pvt Ltd", col2: "Delhi",col3:"07AUFPA8988G124",col4:"No",col5:"07/10/2018",col6:"user_del",col7:"user_del",col8:"Sanjay Kumar",col9:"0100000123",col10:'abc@xyz.com' },
  { id: 2, col1: "ABC Pvt Ltd", col2: "Delhi",col3:"07AUFPA8988G124",col4:"No",col5:"07/10/2018",col6:"user_del",col7:"user_del",col8:"Sanjay Kumar",col9:"0100000123",col10:'abc@xyz.com' },
  { id: 3, col1: "ABC Pvt Ltd", col2: "Delhi",col3:"07AUFPA8988G124",col4:"No",col5:"07/10/2018",col6:"user_del",col7:"user_del",col8:"Sanjay Kumar",col9:"0100000123",col10:'abc@xyz.com' },
  { id: 4, col1: "ABC Pvt Ltd", col2: "Delhi",col3:"07AUFPA8988G124",col4:"No",col5:"07/10/2018",col6:"user_del",col7:"user_del",col8:"Sanjay Kumar",col9:"0100000123",col10:'abc@xyz.com' },
  { id: 5, col1: "ABC Pvt Ltd", col2: "Delhi",col3:"07AUFPA8988G124",col4:"No",col5:"07/10/2018",col6:"user_del",col7:"user_del",col8:"Sanjay Kumar",col9:"0100000123",col10:'abc@xyz.com'},
  { id: 6, col1: "ABC Pvt Ltd", col2: "Delhi",col3:"07AUFPA8988G124",col4:"No",col5:"07/10/2018",col6:"user_del",col7:"user_del",col8:"Sanjay Kumar",col9:"0100000123",col10:'abc@xyz.com' },
  { id: 7, col1: "ABC Pvt Ltd", col2: "Delhi",col3:"07AUFPA8988G124",col4:"No",col5:"07/10/2018",col6:"user_del",col7:"user_del",col8:"Sanjay Kumar",col9:"0100000123",col10:'abc@xyz.com' },
  { id: 8, col1: "ABC Pvt Ltd", col2: "Delhi",col3:"07AUFPA8988G124",col4:"No",col5:"07/10/2018",col6:"user_del",col7:"user_del",col8:"Sanjay Kumar",col9:"0100000123",col10:'abc@xyz.com' },
  { id: 9, col1: "ABC Pvt Ltd", col2: "Delhi",col3:"07AUFPA8988G124",col4:"No",col5:"07/10/2018",col6:"user_del",col7:"user_del",col8:"Sanjay Kumar",col9:"0100000123",col10:'abc@xyz.com' },
  { id: 10, col1: "ABC Pvt Ltd", col2: "Delhi",col3:"07AUFPA8988G124",col4:"No",col5:"07/10/2018",col6:"user_del",col7:"user_del",col8:"Sanjay Kumar",col9:"0100000123",col10:'abc@xyz.com' },
  { id: 11, col1: "ABC Pvt Ltd", col2: "Delhi",col3:"07AUFPA8988G124",col4:"No",col5:"07/10/2018",col6:"user_del",col7:"user_del",col8:"Sanjay Kumar",col9:"0100000123",col10:'abc@xyz.com' },
  { id: 12, col1: "ABC Pvt Ltd", col2: "Delhi",col3:"07AUFPA8988G124",col4:"No",col5:"07/10/2018",col6:"user_del",col7:"user_del",col8:"Sanjay Kumar",col9:"0100000123",col10:'abc@xyz.com' },

];

const columns= [
  { field: "id", hide: true },
  { field: "col1", headerName: "Company Name",width: 150 },
  { field: "col2", headerName: "State",width: 100 },
  { field: "col3", headerName: "GSTIN",width: 150 },
  { field: "col4", headerName: "Is SEZ Unit",width: 100 },
  { field: "col5", headerName: "Registration Date",width: 150 },
  { field: "col6", headerName: "GSP User Name",width: 150 },
  { field: "col7", headerName: "GSP Password",width: 150 },
  { field: "col8", headerName: "Autorised Signatory Name",width: 170 },
  { field: "col9", headerName: "Phone No",width: 150 },
  { field: "col10", headerName: "Email ID",width: 150 },
  { field: "col11", headerName: "Actions",width: 100,sortable: false,  renderCell: (params) => {
    const onClick = (e) => {
      e.stopPropagation(); // don't select this row after clicking

      const api = params.api;
      const thisRow= {};

      api
        .getAllColumns()
        .filter((c) => c.field !== '__check__' && !!c)
        .forEach(
          (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
        );

      return alert(JSON.stringify(thisRow, null, 4));
    };

    return <Box onClick={(e)=>onClick(e)} className="editIconAction"><ActionIcon /></Box>;
  }, }
];
export default function GstIn() {
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
            headerTitle={"GSTIN"}
            handleFormOpen={handleFormOpen}
          >
            <GstCreateForm open={isOpen} onClose={handleClose} />
          </CommonHeader>
        </Box>
        <Box >
        <CommanTableGrid rows={rows} columns={columns}/>
        </Box>
      </Grid>
    </Grid>
  );
}
