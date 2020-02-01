import { combineReducers} from 'redux';
import videosReducers from './video';

const reducer = combineReducers( {
    videos: videosReducers
});

export default reducer;