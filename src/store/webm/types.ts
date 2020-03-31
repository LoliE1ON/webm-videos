import {SET_VIDEOS, TOOGLE_IS_FETCHING} from './actions';
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducers";

export interface IWebmState {
    data: [],
    boards: [],
    isFetching: boolean
}

export interface ISetVideosAction {
    type: typeof SET_VIDEOS
    payload: {
        boards: object,
        data: object
    }
}

export interface IToggleIsFetchingAction {
    type: typeof TOOGLE_IS_FETCHING
    payload: boolean
}

export type WebmBoard = {
    name: string,
    description: string,
    threads: []
};

export type WebmThread = {
    files: [],
};

export type IWebmActions = ISetVideosAction | IToggleIsFetchingAction;
export type ThunkType = ThunkAction<Promise<void>, RootState, unknown, IWebmActions>;