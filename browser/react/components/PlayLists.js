import React from 'react';
import {Link} from 'react-router';

function PlayLists(props){

   const playlists = props.playlists;
  return (

    <div>
          <ul className="list-unstyled">
          {
            playlists.map(playlist => (
              <li className="playlist-item menu-item" key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
              </li>
            )
          )}

          </ul>
    </div>
  )
}

export default PlayLists;
