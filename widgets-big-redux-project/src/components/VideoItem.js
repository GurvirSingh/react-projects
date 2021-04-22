import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return (<div className="video-item item" style={{backgroundColor: '#f7f7f7', borderBottom: '1px solid #f7f7f7'}} onClick={() => onVideoSelect(video)}>
        <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.high.url}></img>
        <div className="content">
            <div className="header">{video.snippet.title}
            </div>
        </div>
    </div>
    );
};

export default VideoItem;