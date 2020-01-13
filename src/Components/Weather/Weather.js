import React from 'react'
import './Weather.css'

    const Weather = ({ data, location }) => { 
      let icon = data.weather&&JSON.stringify(data.weather[0].icon).replace(/"/g,"");
      
      return data !== null && (
        <div>
          <center><h1 className='Header'>Weather By Zip Code</h1></center>
          <div className="card" key={data.id}>
            <div className="card-body">
              <center><h4 id='HeaderLow' className="card-title">Current Conditions In</h4></center>
              <center><h4 className="card-title">{data.name}</h4></center>
              <center><h4>Zip Code: {location}</h4></center>
              <hr/>
              <div className="row">
                <div className="col-lg-6 Display">
                  <center><h4>Current Temperature</h4></center>
                  <center><p>{Math.round(data.main&&JSON.stringify(data.main.temp)) + '\u00B0 F'}</p></center>
                  <center><h4>Feels Like</h4></center>
                  <center><p>{Math.round(data.main&&JSON.stringify(data.main.feels_like)) + '\u00B0 F'}</p></center>
                  <center><h4>Todays High</h4></center>
                  <center><p>{Math.round(data.main&&JSON.stringify(data.main.temp_max)) + '\u00B0 F'}</p></center>
                  <center><h4>Todays Low</h4></center>
                  <center><p>{Math.round(data.main&&JSON.stringify(data.main.temp_min)) + '\u00B0 F'}</p></center>
                </div>
                <div className="col-lg-6 Display">
                  <center><h4>Description</h4></center>
                  <center><h3 id='Description' className='Capitalize'>{data.weather&&JSON.stringify(data.weather[0].description).replace(/"/g,"")}</h3></center>
                  <center><img src={`http://openweathermap.org/img/wn/`+icon+`@2x.png`} alt='weather icon'/></center>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default Weather