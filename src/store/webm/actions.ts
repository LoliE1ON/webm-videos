import {ISetVideosAction, IToggleIsFetchingAction, ThunkType, WebmThread, WebmBoard} from "./types";
import { getVideos } from "../../api/webm";

const SET_VIDEOS = 'SET_VIDEOS';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';

// Actions
const setVideos = (boards: object, data: object): ISetVideosAction => ({
    type: SET_VIDEOS,
    payload: {
        boards,
        data
    },
});

const toggleIsFetching = (status: boolean): IToggleIsFetchingAction => ({
    type: TOOGLE_IS_FETCHING,
    payload: status,
});

// Async actions
const fetchVideo = (): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        const data = await getVideos();

        // Generate only boards, without files
        const boards = Object.entries(data)
        .map(((board: any) => {
            return {
                vendor: board[0],
                boards: board[1].map((b: WebmBoard) => {
                    return {
                        name: b.name,
                        description: b.description,
                        total: b.threads.length && b.threads.reduce((total: number, thread: WebmThread) => total+thread.files.length, 0)
                    }
                })
            }
        }));



        dispatch(setVideos(boards, data));
        dispatch(toggleIsFetching(false));
    };
};

export {
    SET_VIDEOS,
    TOOGLE_IS_FETCHING,
    setVideos,
    fetchVideo,
}