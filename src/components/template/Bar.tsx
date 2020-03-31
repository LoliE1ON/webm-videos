import React from "react";
import Drawer from "@material-ui/core/Drawer";
import {useStyles} from "./styles/header";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";

export const Bar = () => {

    const isFetching = useSelector((state: RootState) => state.webm.isFetching);
    const boards = useSelector((state: RootState) => state.webm.boards);

    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar} />

            { isFetching ? (<div>Loading</div>) : null }

            { boards.map((board: any, key) => (
                <div key={key}>
                    {board.vendor}
                </div>
            )) }

        </Drawer>
    );
};