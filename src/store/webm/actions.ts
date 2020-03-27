import {ISetVideosAction, IToggleIsFetchingAction, ThunkType} from "./types";
import { getVideos } from "../../api/webm";

const SET_VIDEOS = 'SET_VIDEOS';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';

// Actions
const setVideos = (vendors: object): ISetVideosAction => ({
    type: SET_VIDEOS,
    payload: vendors,
});

const toggleIsFetching = (status: boolean): IToggleIsFetchingAction => ({
    type: TOOGLE_IS_FETCHING,
    payload: status,
});

// Async actions
const fetchVideo = (): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        const videos = await getVideos();

        dispatch(setVideos(videos));
        dispatch(toggleIsFetching(false));
    };
};

export {
    SET_VIDEOS,
    TOOGLE_IS_FETCHING,
    setVideos,
    fetchVideo,
}