import React, {useEffect, useState} from "react";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";

export const Theme = ({children}: {children: any}) => {

    const currentTheme = useSelector((state: RootState) => state.theme.theme);

    // Theme settings
    const [theme, setTheme] = useState({
        palette: { type: currentTheme }
    });

    // Toggle theme
    useEffect(() => {
        setTheme({ palette: {
                type: currentTheme
            }});
        console.log("Change store theme")
    }, [currentTheme]);

    // Create theme
    const muiTheme = createMuiTheme(theme);

    return (
        <ThemeProvider theme={muiTheme}>
            { children }
        </ThemeProvider>
    );
};