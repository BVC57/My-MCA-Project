import React,{useState} from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Box } from "@mui/material";
import CommonHeader from "src/components/comman-component/CommonHeader";
import CommanTableGrid from "src/components/comman-component/CommanTableGrid";
import ActionIcon from "src/assets/svg/actionIcon";
import CompanyCreateForm from "./companyCreateForm";

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
  { id: 1, company_name: "ABC Pvt Ltd", pan_company: "AAHPR6722G",ie_code:"0100000123" },
  { id: 2, company_name: "ABC Pvt Ltd", pan_company: "AAHPR6722G",ie_code:"0100000123" },
  { id: 3, company_name: "ABC Pvt Ltd", pan_company: "AAHPR6722G",ie_code:"0100000123" },
  { id: 4, company_name: "ABC Pvt Ltd", pan_company: "AAHPR6722G",ie_code:"0100000123" },
  { id: 5, company_name: "ABC Pvt Ltd", pan_company: "AAHPR6722G",ie_code:"0100000123"},
  { id: 6, company_name: "ABC Pvt Ltd", pan_company: "AAHPR6722G",ie_code:"0100000123" },
  { id: 7, company_name: "ABC Pvt Ltd", pan_company: "AAHPR6722G",ie_code:"0100000123" },
  { id: 8, company_name: "ABC Pvt Ltd", pan_company: "AAHPR6722G",ie_code:"0100000123" },
  { id: 9, company_name: "ABC Pvt Ltd", pan_company: "AAHPR6722G",ie_code:"0100000123" },
  { id: 10, company_name: "ABC Pvt Ltd", pan_company: "AAHPR6722G",ie_code:"0100000123" },
  { id: 11, company_name: "ABC Pvt Ltd", pan_company: "AAHPR6722G",ie_code:"0100000123" },
  { id: 12, company_name: "ABC Pvt Ltd", pan_company: "AAHPR6722G",ie_code:"0100000123" },

];

const columns = [
  { field: "id", hide: true },
  { field: "company_name", headerName: "Company Name",width: 200 },
  { field: "pan_company", headerName: "PAN of Company",width: 200 },
  { field: "ie_code", headerName: "IE Code",width: 700 },
  { field: "col4", headerName: "Actions",width:150,sortable: false,  renderCell: (params) => {
    const onClick = (e) => {
      e.stopPropagation(); // don't select this row after clicking

      const api= params.api;
      const thisRow = {};

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
export default function CompanySetup() {
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
            headerTitle={"Company"}
            handleFormOpen={handleFormOpen}
          >
            <CompanyCreateForm open={isOpen} onClose={handleClose} />
          </CommonHeader>
        </Box>
        <Box >
        <CommanTableGrid rows={rows} columns={columns}/>
        </Box>
      </Grid>
    </Grid>
  );
}
