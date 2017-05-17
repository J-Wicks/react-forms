import React from 'react';

const FilterInput = (props) => {
  return (
    <form className="form-group" onChange={props.changeHandler}style={{marginTop: '20px'}}>
      <input
        className="form-control"
        placeholder="Enter artist name"   
      />
    </form>
  );
}

export default FilterInput;