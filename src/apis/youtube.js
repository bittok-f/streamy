import axios from 'axios';

const KEY = 'AIzaSyDoKVfoLT-2E6_R5ggfjQOhgoE6795duIA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',

  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY,
  },
});
