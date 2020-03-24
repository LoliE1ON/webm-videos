import {TOGGLE_THEME} from './actions';
import {IThemeState, ThemeActions} from "./types";

const initialState: IThemeState = {
    theme: "light",
};

export function themeReducer(state = initialState, action: ThemeActions): IThemeState {

    switch (action.type) {
        case TOGGLE_THEME:
            return Object.assign({}, state, {
                theme: action.payload
            });
        default:
            return state
    }

}