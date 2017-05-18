import React from 'react';
import { Link } from 'react-router';
import Songs from './Songs'
class Playlist extends React.Component {
  constructor(){
    super();
    this.state = {
      songs: [],
      playlist: {}
    }


  }

  playlistSetup (){
      const playlistId = this.props.routeParams.playlistId;
      this.props.selectPlaylist(playlistId)
  }

  componentDidMount () {
    
    this.playlistSetup()
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.routeParams.playlistId !== this.props.selectedPlaylist.id+''){
      this.playlistSetup()
    }
  }

  render () {


    return (
      <div>
        <h3>{ this.props.selectedPlaylist.name}</h3>
        <Songs songs={this.state.songs } /> {'nothing here'}
        { this.state.songs && !this.state.songs.length && <small>No songs.</small> }
        <hr />
      </div>
    );
  }
}

export default Playlist;
