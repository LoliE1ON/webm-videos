import {IWebmActions, IWebmState} from "./types";
import {SET_VIDEOS, TOOGLE_IS_FETCHING} from "./actions";

const initialState: IWebmState = {
    vendors: {},
    isFetching: false,
};

export function webmReducer(state = initialState, action: IWebmActions): IWebmState {

    switch (action.type) {
        case SET_VIDEOS:
            return Object.assign({}, state, {
                vendors: action.payload
            });
        case TOOGLE_IS_FETCHING:
            return Object.assign({}, state, {
                isFetching: action.payload
            });
        default:
            return state
    }

}