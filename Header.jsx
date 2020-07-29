import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Header(props) {
  return (
    <Box component="div">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">{props.title}</Typography>
          <Button color="inherit" className="d-block ml-auto">
            <GitHubIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
