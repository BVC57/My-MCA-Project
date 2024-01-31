/*eslint eqeqeq: "off"*/
import * as React from "react";
import PropTypes from "prop-types";
// material
import { Box, Tabs, Tab, Button, Drawer } from "@mui/material";
// import
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";
// component
import InsightTabComponent from "../../pages/Dashboard/insightTabData";
import Disalerts from "../../pages/Dashboard/Alerts";
import RefreshDataIcon from "../../assets/svg/refeshDataIcon";
import FilterIcon from "../../assets/svg/filterIcon";
import FilterPopup from "../comman-component/filterPopup";
import Swal from "sweetalert2";
import AlertSuccessIcon from "../../assets/svg/alertSuccess.svg";
import AlertErrorIcon from "../../assets/svg/alertError.svg";

// ----------------------------------------------------------------------
const useStyles = makeStyles(() => ({
  dataTabBox: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#F3F3F3",
  },
  dataTabTabs: {
    minHeight: "66px",
  },
  dataTabBoxTabs: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  dataTabFilterButton: {
    color: "#E0301E",
    fontSize: "18px",
    lineHeight: "22px",
    letterSpacing: "0.3px",
    fontFamily: "Helvetica Neue",
    fontWeight: "500",
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "3px",
    border: "1px solid transparent",
    padding: "8px 25px",
    width: "189px",
  },
  mainContainerWrapper: {
    padding: "18px 21px",
  },
  drawerContainer: {
    margin: "48px 26px 46px 32px",
  },
  drawerWrapper: {
    top: "0",
  },
}));

DataTab.propTypes = {
  sx: PropTypes.object,
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={clsx(classes.mainContainerWrapper)}>{children}</Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DataTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [drawer, setDrawer] = React.useState(false);

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };
  const toggleDrawer = (flag) => {
    setDrawer(flag);
  };
  const openAlertFunction = (type) => {
    Swal.fire({
      title: type == "success" ? "Congratulations!" : "Cancel!",
      text:
        type == "success" ? "Your data is Saved Successfully" : "Are You Sure?",
      confirmButtonText: "Confirm",
      allowEscapeKey: false,
      allowOutsideClick: false,
      imageUrl: type == "success" ? AlertSuccessIcon : AlertErrorIcon,
      imageHeight: 128,
      imageWidth: 128,
    }).then((result) => {
      if (result.isConfirmed) {
      }
    });
  };
  const list = () => (
    <Box
      sx={{ width: 330, height: "76vh" }}
      role="presentation"
      className={clsx(classes.drawerContainer)}
    >
      <FilterPopup />
    </Box>
  );
  return (
    <Box sx={{ width: "100%" }}>
      <Box className={clsx(classes.dataTabBox)}>
        <Tabs
          value={value}
          onChange={handleChange}
          className={clsx(classes.dataTabTabs)}
        >
          <Tab
            label="Insight"
            {...a11yProps(0)}
            sx={{ color: "theme.palette.primary.dark" }}
          />
         <Tab
            label="Alerts"
            {...a11yProps(1)}
            sx={{ color: "theme.palette.primary.dark" }}
          />
          <Box pt={2} mr={8} className={clsx(classes.dataTabBoxTabs)}>
            <Button
              className={clsx(classes.dataTabFilterButton)}
              variant="outlined"
              startIcon={<RefreshDataIcon />}
              onClick={() => openAlertFunction("error")}
            >
              Refresh Data
            </Button>
            <Button
              className={clsx(classes.dataTabFilterButton)}
              sx={{
                marginLeft: "30px",
              }}
              variant="outlined"
              startIcon={<FilterIcon />}
              onClick={() => toggleDrawer(true)}
            >
              Filter
            </Button>
            <Drawer
            id="draweWrapper"
              anchor="right"
              open={drawer}
              onClose={() => toggleDrawer(false)}
              className={clsx(classes.drawerWrapper)}
            >
              {list()}
            </Drawer>
          </Box>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <InsightTabComponent />
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Disalerts/>
      </TabPanel>
    </Box>
  );
}
