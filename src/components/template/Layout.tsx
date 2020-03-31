import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Header} from "./Header";
import {Bar} from "./Bar";
import {Content} from "./Content";
import {useStyles} from "./styles/header";
import {Theme} from "./Theme";

export const Layout = ({ children }: { children: any }) => {
    const classes = useStyles();
    return (
        <Theme>
            <div className={classes.root}>
                <CssBaseline />
                <Header/>
                <Bar/>
                <Content>
                    { children }
                </Content>
            </div>
        </Theme>
    );
}