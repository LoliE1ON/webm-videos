import {TOGGLE_THEME} from "./actions";

export interface IThemeState {
    theme: "light" | "dark" | undefined;
}

export interface IToggleThemeAction {
    type: typeof TOGGLE_THEME;
    payload: string;
}

export type ThemeActions = IToggleThemeAction;