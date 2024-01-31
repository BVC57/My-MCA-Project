import * as React from "react";
// import
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";
// material
import {
  Box,
  Typography,
  Grid,
  OutlinedInput,
  ListItemText,
  Checkbox,
  FormControl,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import FilterBlackIcon from "src/assets/svg/filterBlackIcon";

// ----------------------------------------------------------------------
const useStyles = makeStyles(() => ({
  filterDrawerTitle: {
    fontFamily: "Arial",
    fontSize: "24px",
    lineHeight: "21px",
    letterSpacing: "0.3px",
  },
  filterHeading: {
    marginLeft: "33px",
  },
  filterFormField: {
    marginTop: "76px",
  },
  filterFormFieldSelect: {
    border: "1px solid #E5E5E5",
    borderRadius: "2px",
  },
  selectHeading: {
    fontFamily: "Arial",
    fontSize: "24px",
    lineHeight: "24px",
    letterSpacing: "0.3px",
    fontWeight: 700,
    color: "#000",
  },
  dataTabFilterButton: {
    color: "#E0301E",
    fontSize: "18px",
    lineHeight: "21px",
    fontFamily: "Arial",
    fontWeight: "400",
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "3px",
    border: "1px solid transparent",
    padding: "5px 22px",
  },
  filterPopupButton:{
    position:"absolute",
    bottom:'170px'
  }
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
];
export default function FilterPopup() {
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        className={clsx(classes.filterHeading)}
      >
        <FilterBlackIcon />
        <Typography
          component="h3"
          ml={5.4}
          className={clsx(classes.filterDrawerTitle)}
        >
          Filter For Easy Search
        </Typography>
      </Box>
      <Box className={clsx(classes.filterFormField)}>
        <Grid sx={{ display: "flex", alignItems: "center" }} mb={5.8} item spacing={2} container >
          <Grid item>
            <Typography className={clsx(classes.selectHeading)} sx={{width:'100px'}}>
              Entity:
            </Typography>
          </Grid>
          <Grid  item>
            <Box display="flex" alignItems="center">
              <FormControl sx={{ m: 0, width: 213 }} id="filterArrow">
                <Select
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                  className={clsx(classes.filterFormFieldSelect)}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Box>
       <Box>
        <Grid sx={{ display: "flex", alignItems: "center" }} mb={5.8} item spacing={2} container>
          <Grid item>
            <Typography className={clsx(classes.selectHeading)} sx={{width:'100px'}}  >
              IEC:
            </Typography>
          </Grid>
          <Grid  item>
            <Box display="flex" alignItems="center">
              <FormControl sx={{ m: 0, width: 213 }} id="filterArrow">
                <Select
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                  className={clsx(classes.filterFormFieldSelect)}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid sx={{ display: "flex", alignItems: "center" }} mb={5.8} item spacing={2} container>
          <Grid item>
            <Typography className={clsx(classes.selectHeading)} sx={{width:'100px'}}  >
              State:
            </Typography>
          </Grid>
          <Grid  item>
            <Box display="flex" alignItems="center">
              <FormControl sx={{ m: 0, width: 213 }} id="filterArrow">
                <Select
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                  className={clsx(classes.filterFormFieldSelect)}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid sx={{ display: "flex", alignItems: "center" }} mb={5.8} item spacing={2} container>
          <Grid item>
            <Typography className={clsx(classes.selectHeading)} sx={{width:'100px'}}  >
              GSTIN:
            </Typography>
          </Grid>
          <Grid  item>
            <Box display="flex" alignItems="center">
              <FormControl sx={{ m: 0, width: 213 }} id="filterArrow">
                <Select
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                  className={clsx(classes.filterFormFieldSelect)}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        {/* <Grid sx={{ display: "flex", alignItems: "center" }} mb={5.8} item spacing={2} container>
          <Grid item>
            <Typography className={clsx(classes.selectHeading)} sx={{width:'100px'}}  >
              Period:
            </Typography>
          </Grid>
          <Grid  item>
            <Box display="flex" alignItems="center">
              <FormControl sx={{ m: 0, width: 213 }} id="filterArrow">
                <Select
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                  className={clsx(classes.filterFormFieldSelect)}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid> */}
      </Box> 
      <Box pt={2} className={clsx(classes.filterPopupButton)}>
        <Button
          sx={{ px: "38px!important" }}
          className={clsx(classes.dataTabFilterButton)}
          variant="outlined"
        >
          Reset
        </Button>
        
        <Button
          className={clsx(classes.dataTabFilterButton)}
          sx={{
            marginLeft: "38px",
          }}
          variant="outlined"
        >
          Show Results
        </Button>
        
      </Box>
    </Box>
  );
}
