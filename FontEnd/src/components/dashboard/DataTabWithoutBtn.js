import React, { useState } from "react";
import PropTypes from "prop-types";
// material
import { Box, Tabs, Tab } from "@mui/material";
// import
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";
import CompanySetup from "src/pages/Admin/company/companySetup";
import GstIn from "src/pages/Admin/company/gstIn";

// changes 17/12
import BU from "src/pages/Admin/company/bu";
import SBU from "src/pages/Admin/company/sbu";
import LocationMaster from "src/pages/Admin/company/location";
import UserMaster from "src/pages/Admin/company/userMaster";
import AssignRoles from "src/pages/Admin/company/assignRoles";
// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  dataTabBox: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#F3F3F3",
  },
  dataTabTabs: {
    height: "66px",
    minHeight: "66px",
  },
  tabs: {
    fontSize: "28px!important",
    lineHeight: "32px!important",
    padding: "20px 48px 9px 48px!important",
  },
}));

AdminTabBarWithoutBtn.propTypes = {
  sx: PropTypes.object,
};
// the data is show to in header of admin
const tabsData = [
  { id: 0, label: "COMPANY", comp: <CompanySetup /> },
  { id: 1, label: "GSTIN", comp: <GstIn /> },
  { id: 2, label: "BU", comp: <BU /> },
  { id: 3, label: "USER", comp: <SBU/> },
  { id: 5, label: "LOCATION", comp: <LocationMaster/> },
  { id: 5, label: "ASSIGN ROLES", comp: <LocationMaster/> }
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ px: 2.7, py: 2.5 }}>{children}</Box>}
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

export default function AdminTabBarWithoutBtn() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box className={clsx(classes.dataTabBox)}>
        <Tabs
          value={value}
          onChange={handleChange}
          className={clsx(classes.dataTabTabs)}
          // TabIndicatorProps={{ className: classes.dataTabTabs }}
        >
          {tabsData.length > 0 &&
            tabsData.map((item, i) => {
              return (
                <Tab
                  key={item.label + item.id + i}
                  className={classes.tabs}
                  label={item.label}
                  {...a11yProps(item.id)}
                />
              );
            })}
        </Tabs>
      </Box>
      {tabsData.length > 0 &&
        tabsData.map((tab, i) => {
          return (
            <TabPanel key={tab.id + tab.label + i} value={value} index={tab.id}>
              {tab.comp}
            </TabPanel>
          );
        })}
    </Box>
  );
}
