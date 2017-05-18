import React from 'react';
import { Link } from 'react-router';

function NewPlaylist(props) {


    return (
      <div className="well">
        <form onSubmit={props.submitHandler} className="form-horizontal">
          <fieldset>
            <legend>New Playlist</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input onChange={props.changeHandler} className="form-control" value={props.inputValue} type="text" />
              </div>
            </div>
            <div>
            { props.errorMessage?
            <div className="alert alert-warning">{props.errorMessage}</div>:
             null }

            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button disabled = {props.disableButton} type="submit" className="btn btn-success">Create Playlist</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );

}

export default NewPlaylist;
