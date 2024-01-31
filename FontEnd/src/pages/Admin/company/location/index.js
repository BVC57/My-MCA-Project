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
  {id:1, col1: "tata", col2: "tata450",col3:"Bu",col4:"yes",col5:"delhi",col6:"noida,delhi",col7:"gurugam,delhi",col8:"office",col9:"258454",col10:'delhi' },
  {id:2, col1: "lenovo", col2: "lenovo432",col3:"Bu",col4:"no",col5:"pune",col6:"pune,mumbai",col7:"pune,mumbai",col8:"office",col9:"848658",col10:'mumbai' },
  {id:3, col1: "samsung", col2: "samsung",col3:"Sbu",col4:"yes",col5:"gujrat",col6:"surat,gujrat",col7:"surat,gujrat",col8:"office",col9:"535955",col10:'gujrat' },
  {id:4, col1: "skyled", col2: "skyled454",col3:"Bu",col4:"No",col5:"mumbai",col6:"mumbai",col7:"mumbai",col8:"office",col9:"879231",col10:'mumbai' },
  {id:5, col1: "asus", col2: "asus",col3:"Sbu",col4:"yes",col5:"rajkot",col6:"rajkot,gujrat",col7:"rajkot,gujrat",col8:"office",col9:"654545",col10:'gujrat' },
  {id:6, col1: "honda", col2: "honda4232",col3:"Bu",col4:"No",col5:"surat",col6:"surat,gujrat",col7:"surat,gujrat",col8:"office",col9:"435498",col10:'gujrat' },
  {id:7, col1: "nokia", col2: "nokia235",col3:"Bu",col4:"No",col5:"ahemdabad",col6:"ahemdabad,gujrat",col7:"ahemdabad,gujrat",col8:"office",col9:"897489",col10:'gujrat' },
  {id:8, col1: "kia", col2: "kia7834",col3:"Bu",col4:"No",col5:"pune",col6:"pune,mumbai",col7:"pune,mumbai",col8:"office",col9:"894456",col10:'pune' }
];

const columns= [
  { field: "col1", headerName: "Company Name",width: 150 },
  { field: "col2", headerName: "Location code",width: 100 },
  { field: "col3", headerName: "Location category",width: 150 },
  { field: "col4", headerName: "Category of Export incentive",width: 100 },
  { field: "col5", headerName: "LocationName ",width: 150 },
  { field: "col6", headerName: "Address1",width: 150 },
  { field: "col7", headerName: "Address2",width: 150 },
  { field: "col8", headerName: "Place",width: 170 },
  { field: "col9", headerName: "Pin Code",width: 150 },
  { field: "col10", headerName: "State",width: 150 },
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
            headerTitle={"Location Detail"}
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
