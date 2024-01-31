import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Box } from "@mui/material";
import CommanTableGrid from "src/components/comman-component/CommanTableGrid";
import ActionIcon from "src/assets/svg/actionIcon";
import CommonHeader from "src/components/comman-component/CommonHeader";

const useStyles = makeStyles(() => ({
  
}));

export default function UserMaster() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const handleFormOpen = () => {
    setIsOpen(true);
  };

  return (
    <Grid container >

    </Grid>
  );
}
