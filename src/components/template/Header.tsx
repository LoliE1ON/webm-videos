import React from 'react';
import {useTheme} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {toggleTheme} from "../../store/theme/actions";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from "./styles/header";

export const Header = () => {

    const dispatch = useDispatch();
    const theme = useTheme();
    const classes = useStyles();

    function onHandleSwitchTheme () {
        const switchTheme = theme.palette['type'] === "dark" ? "light" : "dark";
        localStorage.themeType = switchTheme;
        dispatch(toggleTheme(switchTheme));
    }

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <Button color="inherit" onClick={onHandleSwitchTheme}>Theme</Button>
            </Toolbar>
        </AppBar>
    );
};
