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
  { id: 1, col1: "ABC", col2: "sbu",col3:"manager",col4:"abc@gmail.com",col5:"885599668",col6:"abc123",col7:"gujrat",col8:"fresher" },
  { id: 2, col1: "bvc", col2: "bu",col3:"sub manager",col4:"bvc@gmail.com",col5:"8745947274",col6:"bvc123",col7:"rajkot",col8:"new" },
  { id: 3, col1: "bhadresh", col2: "sbu",col3:"manager",col4:"bhadresh@gmail.com",col5:"8569321452",col6:"bhadresh123",col7:"bhavnagar",col8:"old" },
  { id: 4, col1: "umesh", col2: "sbu",col3:"sub manager",col4:"abc@gmail.com",col5:"885599668",col6:"abc123",col7:"gujrat",col8:"fresher" },
  { id: 5, col1: "vishal", col2: "bu",col3:"manager",col4:"vishal@gmail.com",col5:"774579668",col6:"vishal123",col7:"ratanpur",col8:"old" },
  { id: 6, col1: "prince", col2: "sbu",col3:"manager1",col4:"prince@gmail.com",col5:"9988774455",col6:"prince123",col7:"mumbai",col8:"new" },
  { id: 7, col1: "yash", col2: "sbu",col3:"manager",col4:"abc@gmail.com",col5:"885599668",col6:"abc123",col7:"gujrat",col8:"fresher" },
  { id: 8, col1: "jay", col2: "bu",col3:"manager1",col4:"jay@gmail.com",col5:"8569747668",col6:"jay123",col7:"vadodra",col8:"new" },
 

];

const columns= [
  { field: "id", hide: true },
  { field: "col1", headerName: "Name of User",width: 150 },
  { field: "col2", headerName: "Department",width: 100 },
  { field: "col3", headerName: "Designation",width: 150 },
  { field: "col4", headerName: "Email id",width: 100 },
  { field: "col5", headerName: "Mobile No",width: 150 },
  { field: "col6", headerName: "User login id",width: 100 },
  { field: "col7", headerName: "Address1 ",width: 150 },
  { field: "col8", headerName: "Business Role ",width: 100 },
  { field: "col11", headerName: "",width: 100,sortable: false,  renderCell: (params) => {
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
            headerTitle={"User Detail"}
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
