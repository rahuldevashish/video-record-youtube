import { FETCH_VIDEOS, ADD_VIDEO, UPDATE_VIDEO, DELETE_VIDEO } from './types';
import axios from 'axios';

const fetchVideos = (videos) => {
    return {
        type: FETCH_VIDEOS,
        videos
    }
}

export const fetchVideosAsync = () => async (dispatch) => {
    axios.get('https://www.googleapis.com/youtube/v3/videos', {}).then((res) => {
        return dispatch(fetchVideos(res.data));
    })
}

const saveVideo = (video) => {
    return {
        type: ADD_VIDEO,
        video
    }
}

export const saveVideoAsync = (video) => async (dispatch) => {
    axios.post('https://www.googleapis.com/youtube/v3/videos', video ).then((res) => {
        return dispatch(saveVideo(res.data));
    });
}
