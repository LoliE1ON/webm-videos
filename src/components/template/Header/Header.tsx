import React, {useState} from 'react';
import {Link} from "react-router-dom";

import {AppBar, IconButton, Button, Toolbar, Typography, withStyles, Drawer, useTheme} from "@material-ui/core";
import AppsIcon from '@material-ui/icons/Apps';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {connect} from "react-redux";
import {styles} from "./styles";
import {IHeaderProps} from "./types";
import {toggleTheme} from "../../../store/theme/actions";


const HeaderComponent = (props: IHeaderProps) => {
    const { classes } = props;

    const [open, setOpen] = useState(false);
    const handleDrawerToggle = () => {
        setOpen(prevState => !prevState);
    };

    const theme = useTheme();
    function onHandleSwitchTheme() {
        const switchTheme = theme.palette['type'] === "dark" ? "light" : "dark";
        localStorage.themeType = switchTheme;
        props.toggleTheme(switchTheme);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                                component={Link} to="/">
                        <AppsIcon onClick={handleDrawerToggle}/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        WEBM videos
                    </Typography>

                    <div>
                        <Button color="inherit" onClick={onHandleSwitchTheme}>Switch Theme</Button>
                        <Button color="inherit" component={Link} to="/"><ExitToAppIcon/></Button>
                    </div>

                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerToggle}>
                        <AppsIcon/>
                    </IconButton>
                </div>
                123
            </Drawer>

        </div>
    );
};

const mapDispatchToProps = {
    toggleTheme,
};

export const Header = connect(null, mapDispatchToProps)(withStyles(styles)(HeaderComponent));