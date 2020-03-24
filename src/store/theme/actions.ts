import {IToggleThemeAction} from "./types";

export const TOGGLE_THEME = 'CHANGE_THEME';

// Toggle theme
export function toggleTheme(theme: string): IToggleThemeAction {
    return {
        type: TOGGLE_THEME,
        payload: theme,
    }
}

