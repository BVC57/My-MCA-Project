import React,{useState} from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Box } from "@mui/material";
import CommonHeader from "src/components/comman-component/CommonHeader";
import CommanTableGrid from "src/components/comman-component/CommanTableGrid";
import ActionIcon from "src/assets/svg/downloadIcon";
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
  { id: 1, col1: "tata", col2: "Delhi",col3:"354DFPA8988G124",col4:"YES",col5:"10/04/2022",col6:"tata",col7:"tata123",col8:"bhavin",col9:"01000256156",col10:'tata@xyz.com' },
  { id: 2, col1: "lenovo", col2: "New Delhi",col3:"DE3JH344A898824",col4:"No",col5:"07/05/2020",col6:"lenovo",col7:"lenovo123",col8:"darshan",col9:"212161123",col10:'lenovo@xyz.com' },
  { id: 3, col1: "samsung", col2: "pune",col3:"34RH3PA458988G4",col4:"YES",col5:"20/10/2022",col6:"samsung",col7:"samsung123",col8:"mahi",col9:"8945689123",col10:'samsung@xyz.com' },
  { id: 4, col1: "skyled", col2: "gujrat",col3:"07AUFPA52988G24",col4:"No",col5:"11/10/2018",col6:"skyled",col7:"skyled123",col8:"rohan",col9:"215645623",col10:'skyled@xyz.com' },
  { id: 5, col1: "tatanano", col2: "Delhi",col3:"FW2345A84988G14",col4:"YES",col5:"02/05/2023",col6:"tatanano",col7:"tatanano123",col8:"dipesh",col9:"894561523",col10:'tatanano@xyz.com'},
  { id: 6, col1: "adanipower", col2: "pune",col3:"3EE35FPA8988G4",col4:"YES",col5:"01/01/2019",col6:"adanipower",col7:"adanipower123",col8:"anand",col9:"516415335",col10:'adanipower@xyz.com' },
  { id: 7, col1: "asus", col2: "gujrat",col3:"7ERYERPA8988",col4:"No",col5:"07/10/2018",col6:"asus",col7:"asus123",col8:"manish",col9:"241568563",col10:'asus@xyz.com' },
  { id: 8, col1: "honda", col2: "gujrat",col3:"07AUFPA8988G124",col4:"YES",col5:"18/10/2020",col6:"honda",col7:"honda123",col8:"rohit",col9:"12356485",col10:'honda@xyz.com' },

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
