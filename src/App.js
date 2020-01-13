import React, { Component } from 'react';
import Weather from './Components/Weather/Weather';
import LocationInput from './Components/LocationInput/LocationInput';
import './App.css';

class App extends Component {
  state = {
    data: [],
    location: '19805'
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = () => {
    let api = 'https://api.openweathermap.org/data/2.5/weather?zip=' + this.state.location + ',us&units=imperial&appid=';
    const apiKey = 'e3e26770ea91f1526f1d91e4b4212507';
    fetch(api + apiKey)
    .then(res => res.json())
    .then((data) => {
      this.setState({ data: data });
    })
    .catch(console.log);
  };

  submitFunction = (location) => {
    this.setState({location: location}, () => this.fetchApi());
  };

  render() {
    let weatherData = this.state.data;
    return (
      <div>
        <Weather data={weatherData} location={this.state.location}/>
        <LocationInput
          placeholder={' Change Zipcode'}
          submitFunction={this.submitFunction}
        />
      </div>
    );
  }
}

export default App;
