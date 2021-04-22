import axios from 'axios';

const KEY = 'AIzaSyAOSn3OXtdRzw2c9MS-ugGpl_nCW9CuHPM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});