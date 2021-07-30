import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import {useStyles} from "./material-styles";
import {TextField} from "@material-ui/core";
import {Home} from "@material-ui/icons";

export default function BottomAppBar({onAddClick}) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline/>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start">
            <a href="/"><Home color="secondary"/></a>
          </IconButton>
          <Fab onClick={() => onAddClick()} color="primary" aria-label="add" className={classes.fabButton}>
            <AddIcon/>
          </Fab>
          <div className={classes.grow} />
          <form noValidate autoComplete="off">
            <TextField id="standard-basic" placeholder="Search posts..."/>
          </form>
          <IconButton color="text">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}