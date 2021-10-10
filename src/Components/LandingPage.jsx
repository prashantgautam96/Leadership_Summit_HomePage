import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons

// core components


import '../Components.css';

const useStyles =  makeStyles(theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    //   margin: theme.spacing(1)
    },

  }));

export default function SectionHome() {
  const classes = useStyles();
  return (
    <div className="heroimage">
        <div className="overlay">
            <h1>Vidwan Sabha</h1>
        </div>
    </div>
  );
}
