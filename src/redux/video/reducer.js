import { FETCH_VIDEOS, ADD_VIDEO, UPDATE_VIDEO, DELETE_VIDEO } from './types';

const initialState = {
    videos: [],
    value: ""
}
export const reducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case FETCH_VIDEOS:
            return { ...state, videos: action.videos };
        case ADD_VIDEO:
            return { ...state, videos: [...state.videos, action.video] };
        case UPDATE_VIDEO:
            const newvideos = state.videos.slice();
            newvideos.splice(state.videos.findIndex(video => video.id === action.video.id), 1, action.video);
            return { ...state, videos: newvideos }
        case DELETE_VIDEO:
            return { ...state, videos: state.videos.slice().splice(state.videos.findIndex(video => video.id === action.id), 1) }
        default:
            return { ...state };
    }
}