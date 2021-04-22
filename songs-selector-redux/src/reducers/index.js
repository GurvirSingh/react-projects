import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05'},
        { title: 'All Star', duration: '2:30'},
        { title: 'I want it that way', duration: '1:45'}, 
        { title: 'That\'s Life', duration: '6:00'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});