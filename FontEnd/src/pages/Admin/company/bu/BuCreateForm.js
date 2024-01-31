import { Dialog, DialogTitle, Box, TextField, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import PlusIcon from "src/assets/svg/plusIcon";
import { useState } from "react";
import axios, { Axios } from "axios";
const useStyles = makeStyles(() => ({
  dialogScreen: {
    width: "1603px",
    left: "261px",
  },
  dialogTitle: {
    fontFamily: "Helvetica Neue",
    fontWeight: 700,
    fontSize: "36px",
    lineHeight: "41px",
    letterSpacing: "0.3px",
    color: "#000000",
    padding: "34px 63px 30px 63px",
  },
  dialogInnerContainer: {
    padding: "0 63px 34px 63px",
  },
  formDetails: {
    display: "block",
    marginBottom: "50px",
    width: "200px",
  },
  dataTabFilterButton: {
    color: "#E0301E",
    fontSize: "18px",
    lineHeight: "22px",
    fontFamily: "Arial",
    fontWeight: 400,
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "3px",
    border: "1px solid transparent",
    padding: "12px 22px",
    width: "155px",
  },
  filterPopupButton: {
    position: "absolute",
    bottom: "34px",
  },
  addMisButton: {
    backgroundColor: "#F0F0F0",
    borderRadius: "11px",
    fontSize: "18px",
    lineHeight: "21px",
    fontFamily: "Arial",
    fontWeight: 400,
    color: "#8A8A8A",
    padding: "9.5px 27px",
  },
}));

export default function BuCreateForm({open, onClose}) {
  const classes = useStyles();
  const url="http://localhost:4001/insertbu";
  const [data,setdata]=useState({
      cn:"",
      bu:""
  })
  function submit(e){
    e.preventDefault();
    axios.post(url,{
      cn:data.cn,
      bu:data.bu
    }).then(res=>{
      console.log(res.data)
    })
  }
  function handle(e){
    const newdata={ ...data};
    newdata[e.target.id]=e.target.value;
    setdata(newdata);
    console.log(newdata);
  }
 
  //   const handleClose = () => {
  //     onClose();
  //   };

  return (
    <Dialog
      onClose={onClose}
      open={open}
      className={classes.dialogScreen}
      fullWidth
    >
      <DialogTitle className={classes.dialogTitle}>Add BU Details</DialogTitle>
      <Box className={classes.dialogInnerContainer}>
        <form onSubmit={(e)=>{submit(e)}}>
          <TextField
            fullWidth
            id="cn"
            name="cn"
            label="Company Name"
            variant="standard"
           
            onChange={(e)=>handle(e)}
            value={data.cn}
            required
            className={classes.formDetails}
          />
          <TextField
            fullWidth
            id="bu"
            name="bu"
            label="BU"
            onChange={(e)=>handle(e)}
            value={data.bu}
            variant="standard"
            required
            className={classes.formDetails}
          />
          {/* <Button
            endIcon={<PlusIcon />}
            className={classes.addMisButton}
            id="addMisButton"
          >
            Add MIS
          </Button> */}
          <Box pt={2} className={classes.filterPopupButton}>
            <Button
              className={classes.dataTabFilterButton}
              variant="outlined"
              type="submit"
            >
              Add New
            </Button>

            <Button
              className={classes.dataTabFilterButton}
              sx={{
                marginLeft: "82px",
              }}
              S
              variant="outlined"
              onClick={() => onClose()}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Dialog>
  );
}
