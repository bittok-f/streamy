import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  componentDidMount() {
    this.onTermSubmit('programming');
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <h1
          style={{ fontSize: '1.4rem', padding: '1rem 0', textAlign: 'center' }}
          className="streamy"
        >
          STREAMY
        </h1>
        <SearchBar onTermSubmit={this.onTermSubmit} />

        <div className="eleven wide column">
          <VideoDetail video={this.state.selectedVideo} />
        </div>
        <div className="five wide column snippets">
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>

        <div
          style={{ fontSize: '1.2rem', padding: '1rem 0', textAlign: 'center' }}
          className="copyright"
        >
          &copy; | 2022 | Francis Bittok
        </div>
      </div>
    );
  }
}
export default App;
