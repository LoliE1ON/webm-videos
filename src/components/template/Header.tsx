import React, {useState} from 'react';
import {Link} from "react-router-dom";

import {AppBar, createStyles, IconButton, Button, Theme, Toolbar, Typography, withStyles, Drawer} from "@material-ui/core";
import AppsIcon from '@material-ui/icons/Apps';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {connect} from "react-redux";
import {RootState} from "../../store/reducers";

interface IHeaderProps {
    classes: {
        root: string,
        menuButton: string,
        title: string,
        drawer: string,
        drawerPaper:string,
        drawerHeader: string
    };
}

const HeaderComponent = (props: IHeaderProps) => {
    const { classes } = props;

    const [open, setOpen] = useState(false);
    const handleDrawerToggle = () => {
        setOpen(prevState => !prevState);
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
                        Application
                    </Typography>

                    <div>
                        <Button color="inherit" component={Link} to="/">Home</Button>
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

const drawerWidth = 240;
const styles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        width: '100vw',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
});

const mapStateToProps = (state: RootState) => ({

});

export const Header = connect(mapStateToProps, null)(withStyles(styles)(HeaderComponent));