import {TOGGLE_THEME} from "./actions";

export interface IThemeState {
    theme: string;
}

export interface IToggleThemeAction {
    type: typeof TOGGLE_THEME;
    payload: string;
}

export type ThemeActions = IToggleThemeAction;