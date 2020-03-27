import React, {useMemo, useState} from "react";
import {createMuiTheme, ThemeProvider, useMediaQuery} from "@material-ui/core";
import {RootState} from "../../store/reducers";
import {connect} from "react-redux";

type Theme = 'light' | 'dark';
type ThemeSwitcherProps = {
    children: any,
    currentTheme?: Theme
};

const ThemeSwitcherContainer = ({children, currentTheme}: ThemeSwitcherProps) => {
    // Theme settings
    const [theme, setTheme] = useState({
        palette: { type: currentTheme }
    });

    // Switch system theme
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    useMemo(() => {
        return setTheme({ palette: {
            type: prefersDarkMode ? 'dark' : 'light'
        }});
    }, [prefersDarkMode]);

    // Toggle theme
    useMemo(() => {
        setTheme({ palette: {
            type: currentTheme
        }});
    }, [currentTheme]);

    // Create theme
    const muiTheme = createMuiTheme(theme);

    return (
        <ThemeProvider theme={muiTheme}>
            { children }
        </ThemeProvider>
    );
};

const mapStateToProps = (state: RootState) => ({
    currentTheme: state.theme.theme
});

const ThemeSwitcher = connect(mapStateToProps, null)(ThemeSwitcherContainer);

export {
    ThemeSwitcher
};