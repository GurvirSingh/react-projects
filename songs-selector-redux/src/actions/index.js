// select song action creator 
// we can shorten the index to just ../actions :) so saving typing 

// action creator
export const selectSong = (song) => {
    return { 
        type: 'SONG_SELECTED',
        payload: song
    };
};
