import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button, Box, Autocomplete, TextField } from "@mui/material";
// component
import SearchWhiteIcon from "src/assets/svg/searchIconWhite";
import DownloadIcon from "src/assets/svg/downloadIcon";

const useStyles = makeStyles(() => ({
  TableHeaderHeading: {
    fontFamily: "Helvetica Neue",
    fontWeight: 400,
    fontSize: "22px",
    lineHeight: "24px",
    color: "#fff",
  },
  TableHeaderBtn: {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "3px",
    fontFamily: "Arial",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "14px",
    color: "#E0301E",
    letterSpacing: "0.3px",
    padding: "6px 19px 9px 19px",
    marginLeft: "39px",
  },
  TableHeaderFormControl: {
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid #FFFFFF",
    borderRadius: "3px",
    padding: "0 2px",
  },
  TableHeaderSelect: {
    color: "#fff",
    fontFamily: "Arial",
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "24px",
  },
  TableHeaderAutoComplete: {
    marginLeft: "22px",
    background: "#FFFFFF",
    border: "1px solid #FFFFFF",
    borderRadius: "3px",
    marginRight: "22px",
  },
  TableHeaderSearchIcon: {
    cursor: "pointer",
    width: "26px",
    height: "26px",
  },
  TableHeaderDownloadIcon: {
    cursor: "pointer",
    marginLeft: "22px",
    width: "18px",
    height: "26px",
  },
}));
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];
export default function CommonHeader({
  children,
  headerTitle,
  handleFormOpen,
}) {
  const classes = useStyles();

  function down(){

      alert("Download Json file")
      alert("this is under work")
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <h1 className={classes.TableHeaderHeading}>{headerTitle}</h1>
        <Button
          className={classes.TableHeaderBtn}
          onClick={() => handleFormOpen()}
          id="addNewBtn"
        >
          Add New
        </Button>
        {children}
      </Box>
      <Box display="flex" alignItems="center" justifyContent="flex-end">
        <Autocomplete
          sx={{ width: 147, height: 28 }}
          className={classes.TableHeaderAutoComplete}
          id="free-solo-demo"
          freeSolo
          options={top100Films.map((option) => option.title)}
          renderInput={(params) => <TextField {...params} />}
        />
        <Box className={classes.TableHeaderSearchIcon}>
          <SearchWhiteIcon />
        </Box>
        <Box className={classes.TableHeaderDownloadIcon} onClick={down}>
          <DownloadIcon />
        </Box>
      </Box>
    </Box>
  );
}
