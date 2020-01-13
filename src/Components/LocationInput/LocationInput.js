import React, { Component } from 'react';
import './LocationInput.css'

class LocationInput extends Component {
  state = {
    locationInputField: '',
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    this.props.submitFunction(this.state.locationInputField);
  };
  
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  
  render () {
    const { placeholder } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <center>
          <input 
            name='locationInputField' 
            onChange={this.onChange} 
            className='ZipInput' 
            placeholder={placeholder}/>
        </center>
        <center>
          <input className='ZipButton' type='submit' name='locationInputField' value='Submit'/>
        </center>
      </form>
    );
  };
};
    
        
    

export default LocationInput;