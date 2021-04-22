import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class YoutubeHome extends React.Component {
    state = { videos: [], selectedVideo: null };

    onTermSubmit = async (term) => {
        const response = await Youtube.get('/search', {
            params: {q: term}
        });

        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    };

    componentDidMount = () => {
        let searchRandomTerms = ['xQc', 'Youtube', 'Davib dobrik too', 'Neil tyson', 'Grammys', 'Outer Space', 'Vsauce', 'react.js'];
        let randSearchNumber = Math.floor(Math.random() * 8);
        let searchTerm = searchRandomTerms[randSearchNumber];

        this.onTermSubmit(searchTerm);
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    };

    render() {
        return <div className="ui container" style={{marginTop: '20px'}}>
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                    <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                    <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default YoutubeHome;