import {combineReducers} from "redux";
import {themeReducer} from "./theme/reducer";

export const reducers = combineReducers({
    theme: themeReducer,
});

export type RootState = ReturnType<typeof reducers>
