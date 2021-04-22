import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    if(!song) {
        return <div>Select a Song!</div>
    }

    return (
    <div>
        Song Details: 
        <h2>{song.title}</h2>
        <h3>{song.duration}</h3>
    </div>);
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);