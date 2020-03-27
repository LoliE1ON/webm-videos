import {combineReducers} from "redux";
import {themeReducer} from "./theme/reducer";
import {webmReducer} from "./webm/reducer";

export const reducers = combineReducers({
    theme: themeReducer,
    webm: webmReducer
});

export type RootState = ReturnType<typeof reducers>
