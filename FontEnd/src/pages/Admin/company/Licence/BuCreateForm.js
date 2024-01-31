import React from "react";
import clsx from "clsx";
import { Dialog, DialogTitle, Box, TextField, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import PlusIcon from "src/assets/svg/plusIcon";

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
    marginBottom: "35px",
    width: "200px",
  },
  dataTabFilterButton: {
    color: "#E0301E",
    fontSize: "18px",
    lineHeight: "22px",
    fontFamily: "Arial",
    fontWeight: "400",
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "3px",
    border: "1px solid transparent",
    padding: "12px 22px",
    width: "155px",
  },
  filterPopupButton: {
    position: "absolute",
    bottom: "25px",
  },
  formContainer: { display: "flex", alignItems: "center" },
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

export default function GstCreateForm(props) {
  const classes = useStyles();
  const values = {
    someDate: "2021-05-24"
  };
  const { open, onClose } = props;
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      className={classes.dialogScreen}
      fullWidth
    >
      <DialogTitle className={classes.dialogTitle}>
        Add Licence Details
      </DialogTitle>
      <Box className={classes.dialogInnerContainer}>
        <form className={classes.formContainer}>
          <Box>
            <TextField
              fullWidth
              id="standard-basic"
              label="Company Name"
              variant="standard"
              required
              className={classes.formDetails}
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="License No"
              variant="standard"
              required
              className={classes.formDetails}
            />
             <TextField
              fullWidth
              id="standard-basic"
              label="License type"
              variant="standard"
              required
              className={classes.formDetails}
            />
             <TextField
              fullWidth
              id="standard-basic"
              label="Date of Issuance"
              variant="standard"
              required
              className={classes.formDetails}
            />
             <TextField
              fullWidth
              id="standard-basic"
              label="Port of Registration"
              variant="standard"
              required
              className={classes.formDetails}
            />
           
          </Box>
          <Box pl={9}>
            <TextField
              fullWidth
              id="standard-basic"
              label="License Value (Rs.)"
              variant="standard"
              required
              className={classes.formDetails}
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="Validity"
              variant="standard"
              required
              className={classes.formDetails}
            />
             <TextField
              fullWidth
              id="standard-basic"
              label="Item Description"
              variant="standard"
              required
              className={classes.formDetails}
            />
             <TextField
              fullWidth
              id="standard-basic"
              label="Country of Origin"
              variant="standard"
              required
              className={classes.formDetails}
            />
             <TextField
              fullWidth
              id="standard-basic"
              label="Place"
              variant="standard"
              required
              className={classes.formDetails}
            />
          
          </Box>
          <Box>
       
        </Box>
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
              variant="outlined"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Dialog>
  );
}
