import React from 'react';
import Artists from './Artists';
import FilterInput from'./FilterInput';

class FilterableArtistsContainer extends React.Component  {
	constructor(props){
		super(props);
		this.state = {
			inputValue: '',
		}
		this.changeHandler = this.changeHandler.bind(this);

	}

	changeHandler(event){
	
		this.setState({inputValue:event.target.value});
	}

	render(){
		const inputValue = this.state.inputValue
		const filteredArtists = this.props.artists.filter(artist => 
	  		artist.name.match(inputValue));
	  return (

	 	<div> 
		 	<FilterInput changeHandler={this.changeHandler}/>
			<Artists artists={filteredArtists}/>
	 	</div>
	  );
	}
}

export default FilterableArtistsContainer;