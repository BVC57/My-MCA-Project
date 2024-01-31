/*eslint eqeqeq: "off"*/
import React, { useState } from "react";
import { Dialog, DialogTitle, Box, TextField, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import PlusIcon from "src/assets/svg/plusIcon";
import clsx from "clsx";

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
  dynamicInput: {
    display: "flex",
    alignItems: "center",
  },
  marginLeft: {
    marginLeft: "20px",
  },
}));

export default function CompanyCreateForm(props) {
  const classes = useStyles();
  const { open, onClose } = props;
  const [counter, setCounter] = useState(0);
  const [inputValues, setInputValues] = useState({});
  console.log("inputValues", inputValues);
  const handleClose = () => {
    onClose();
  };
  const handleClick = () => {
    if (counter != 5) {
      setCounter(counter + 1);
    }
  };
  const handleOnChange = (e) => {
    const abc = {};
    abc[e.target.className] = e.target.value;
    setInputValues({ ...inputValues, ...abc });
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      className={classes.dialogScreen}
      fullWidth
    >
      <DialogTitle className={classes.dialogTitle}>
        Add Company Details
      </DialogTitle>
      <Box className={classes.dialogInnerContainer}>
        <form>
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
            label="PAN of Company"
            variant="standard"
            required
            className={classes.formDetails}
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="IE Code"
            variant="standard"
            required
            className={classes.formDetails}
          />
          <Button
            endIcon={<PlusIcon />}
            className={classes.addMisButton}
            id="addMisButton"
            onClick={handleClick}
          >
            Add MIS
          </Button>
          <Box className={classes.dynamicInput}>
            {Array.from(Array(counter)).map((c, index) => {
              return (
                <TextField
                  key={index}
                  fullWidth
                  variant="standard"
                  onChange={handleOnChange}
                  className={clsx(classes.formDetails, classes.marginLeft)}
                  label={`MIS ${index+1}`}
                />
              );
            })}
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
