import {SET_VIDEOS, TOOGLE_IS_FETCHING} from './actions';
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducers";

export interface IWebmState {
    vendors: {}
    isFetching: boolean
}

export interface ISetVideosAction {
    type: typeof SET_VIDEOS
    payload: object
}

export interface IToggleIsFetchingAction {
    type: typeof TOOGLE_IS_FETCHING
    payload: boolean
}

export type IWebmActions = ISetVideosAction | IToggleIsFetchingAction;

export type ThunkType = ThunkAction<Promise<void>, RootState, unknown, IWebmActions>;