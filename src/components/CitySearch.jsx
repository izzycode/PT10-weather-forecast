import React from 'react'

export default class CitySearch extends React.Component {

  handleChange = event => {
    // console.log( event.target.value )
    this.props.setCity( event.target.value )
  }

  render(){
    return(
      <form>
        <label htmlFor="city">City: </label>
        <input
          name="city"
          type="search"
          placeholder="e.g.: Boston"
          autoComplete="off"
          onChange={ this.handleChange }/>
      </form>
    )
  }
}
