import React, { Component, Fragment } from 'react'
import CitySearch from './CitySearch'
import CityResults from './CityResults'

export default class WeatherApp extends Component {
  state = {
    cityName: ''
  }

  setCity = (cityName) => {
    this.setState({ cityName })
  }

  render(){
    return(
      <Fragment>
        <CitySearch setCity={ this.setCity }/>
        <CityResults key={ this.state.cityName } cityName={ this.state.cityName }/>
      </Fragment>
    )
  }
}
