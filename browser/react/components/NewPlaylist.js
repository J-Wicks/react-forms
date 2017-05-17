import React from 'react';
import { Link } from 'react-router';

class NewPlaylist extends React.Component {
  constructor(){
    super()
    this.state ={
      inputValue: '',
      disableButton: true
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event){
    event.preventDefault()
    console.log(this.state.inputValue)
    this.setState({inputValue: ''})
  }

  changeHandler(event){
    this.setState({inputValue:event.target.value});
    if(event.target.value.length === 0 || event.target.value.length > 16){this.setState({disableButton: true})}
    else this.setState({disableButton: false})
  }
  // const artists = props.artists;
  render(){
    return (
      <div className="well">
        <form onSubmit={this.submitHandler} className="form-horizontal">
          <fieldset>
            <legend>New Playlist</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input onChange={this.changeHandler} className="form-control" value={this.state.inputValue} type="text" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button disabled = {this.state.disableButton} type="submit" className="btn btn-success">Create Playlist</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default NewPlaylist;
