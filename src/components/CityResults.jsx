import React, { Component } from 'react'

export default class CityResults extends Component {

  state = {
    cities: [],
  }

  componentDidMount(){
    fetch( `https://wyn-weather-api.herokuapp.com/cities?query=${this.props.cityName}` )
      .then( response => response.json() )
      .then( cities => {
        console.log( cities )
        this.setState({ cities })
      })
  }

  render(){
    return(
      <div>
        {
          this.state.cities.map( city => <div key={ city.id }>{ city.name }</div> )
        }
      </div>
    )
  }
}
