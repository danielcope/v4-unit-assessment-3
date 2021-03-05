import React, { Component } from 'react'
import Header from './components/Header'
import BookList from './components/BookList'
import Shelf from './components/Shelf'
import SearchBar from './components/SearchBar'
import './App.css';
import data from './data'

class App extends Component {
  constructor(){
    super();

    this.state = {
      books:data,
      shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
  }

  addToShelf (title) {
    
    
    let shelfDif = this.state.shelf.map((ele,i) => 
    <p className='list-items' key={i}>{ele}</p>
    )
    
    shelfDif.push(title)
    
    this.setState({ shelf:shelfDif })
  }
    
  clearShelf() {
    this.setState ({ shelf:[] })
  }
  
 
  render(){
    return (

      <div className="App">
        <header>
          <Header />
        </header>
        <body>
          <SearchBar />
          <section className="booklist">
            <BookList books={this.state.books} addToShelf={this.addToShelf} />
          </section>
          <section className="my-shelf">
            <h1>My Shelf</h1>
            <button className="clear" onClick={this.clearShelf}>Clear My Shelf</button>
            <Shelf shelf={this.state.shelf}/>
          </section>
        </body>
      </div>
    );
  }
}



export default App;
