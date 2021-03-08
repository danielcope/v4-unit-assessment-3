import React, { Component } from 'react'

class SearchBar extends Component {



  render (){


    return(
      <section>
        <input className='search-input' onChange={(e)=>this.props.handleChange(e.target.value)} placeholder={'search book'}/>
        <button className='button-one' onClick={this.props.searchBook}>Search</button>
        <button className='button-two' onClick={this.props.clearSearch}>Clear search</button>
      </section>

    )
  }


}


export default SearchBar