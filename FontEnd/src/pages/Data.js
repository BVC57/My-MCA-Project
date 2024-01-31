import React,{useState} from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Box } from "@mui/material";
import CommonHeader from "src/components/comman-component/CommonHeader";
import CommanTableGrid from "src/components/comman-component/CommanTableGrid";
import ActionIcon from "src/assets/svg/downloadIcon";
// import GstCreateForm from "./gstCreateForm";

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
  { id: 1, col1: "lms_new@126@207@Advance@6@Akansha_1", col2: "txt",col3:"50kb",col4:"10/04/2023",col5:"file uploaded" },
  { id: 2, col1: "lms_new@126@207@BOE@8@shivangi", col2: "txt",col3:"30kb",col4:"10/04/2023",col5:"file uploaded" },
  { id: 3, col1: "lms_new@126@207@NOTICE@6@new143_2", col2: "txt",col3:"20kb",col4:"5/03/2023",col5:"file uploaded" },
  { id: 4, col1: "pdf_parser@122@207@GSTR3B@3@shivangi", col2: "txt",col3:"25kb",col4:"01/03/2023",col5:"file not uploaded" },
  { id: 5, col1: "lms_new@126@207@Advance@6@Akansha_1", col2: "txt",col3:"10kb",col4:"15/03/2023",col5:"file uploaded"},
  { id: 6, col1: "pdf_parser@122@207@GSTR3B@3@shivangi", col2: "txt",col3:"25kb",col4:"13/02/2023",col5:"file uploaded" },
  { id: 7, col1: "lms_new@126@207@NOTICE@6@new143_2", col2: "txt",col3:"30kb",col4:"24/03/2023",col5:"file not uploaded " },
  { id: 8, col1: "lms_new@126@207@Advance@6@Akansha_1", col2: "txt",col3:"40kb",col4:"10/03/2023",col5:"file uploaded" },
  { id: 9, col1: "pdf_parser@122@207@GSTR3B@3@shivangi", col2: "txt",col3:"23kb",col4:"17/02/2023",col5:"file uploaded" },
  { id: 10, col1: "lms_new@126@207@NOTICE@6@new143_2", col2: "txt",col3:"14kb",col4:"26/03/2023",col5:"file not uploaded" },
  { id: 11, col1: "lms_new@126@207@Advance@6@Akansha_1", col2: "txt",col3:"28kb",col4:"05/02/2023",col5:"file uploaded" },
  { id: 12, col1: "pdf_parser@122@207@GSTR3B@3@shivangi", col2: "txt",col3:"10kb",col4:"15/02/2023",col5:"file uploaded" },

];

const columns= [
  { field: "id", hide: true },
  { field: "col1", headerName: "File Name",width: 150 },
  { field: "col2", headerName: "File Type",width: 100 },
  { field: "col3", headerName: "File Size",width: 150 },
  { field: "col4", headerName: "Upload Date",width: 100 },
  { field: "col5", headerName: "Status",width: 100 },
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
export default function Data() {
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
            headerTitle={"Uploaded File Data"}
            // handleFormOpen={handleFormOpen}
          >
            {/* <GstCreateForm open={isOpen} onClose={handleClose} /> */}
          </CommonHeader>
        </Box>
        <Box >
        <CommanTableGrid rows={rows} columns={columns}/>
        </Box>
      </Grid>
    </Grid>
  );
}
