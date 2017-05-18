import React from 'react';
import NewPlaylist from './NewPlaylist';
import Songs from'./Songs';
import axios from 'axios';
import { hashHistory } from 'react-router'

class NewPlayListContainer extends React.Component  {
	constructor(props){
		super(props);
		this.state = {
			inputValue: '',
      disableButton: true,
      errorMessage: ''
		}
		this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

	}

  submitHandler(event){
    event.preventDefault()

    this.props.addPlayList(this.state.inputValue)

    this.setState({inputValue: ''})

  }

	changeHandler(event){
    this.setState({inputValue:event.target.value});
    if(event.target.value.length === 0 ){
        this.setState(
          { disableButton: true,
            errorMessage: 'Input too short'
          });


    }
    else if(event.target.value.length > 16){
      this.setState(
          { disableButton: true,
            errorMessage: 'Input too long'
          });
    }
    else {
      this.setState({
        disableButton: false,
        errorMessage: ''
      });

    }

	}

	render(){
		// const inputValue = this.state.inputValue
		// const filteredArtists = this.props.artists.filter(artist =>
	  // 		artist.name.match(inputValue));
	  return (

	 	<div>
		 	<NewPlaylist inputValue={this.state.inputValue}changeHandler = {this.changeHandler} submitHandler={this.submitHandler} disableButton={this.state.disableButton} errorMessage={this.state.errorMessage} />
	 	</div>
	  );
	}
}

export default NewPlayListContainer;
