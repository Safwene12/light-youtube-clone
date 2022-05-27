import axios from 'axios';

const KEY = 'AIzaSyCviOz4AXeu6gu88ELJbBEM7ttucIMXS8c';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 7,
        type: 'video',
        key: KEY,
    }
})