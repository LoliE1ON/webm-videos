import React from "react";
import {useStyles} from "./styles/header";

export const Content =  ({ children }: {children: any}) => {

    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            { children }
        </main>
    );
}