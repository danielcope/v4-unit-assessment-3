import React, { Component } from 'react'

class SearchBar extends Component {



  render (){


    return(
      <section>
        <input className='search-input' onChange={this.props.handleChange}/>
        <button className='button-one' searchBook={this.searchBook}>Search</button>
        <button className='button-two'>Clear search</button>
      </section>

    )
  }


}


export default SearchBar