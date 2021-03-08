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
      shelf: [],
      userInput:''
    
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.searchBook = this.searchBook.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
  }

  addToShelf (title) {
    let shelfDif = this.state.shelf.map((ele) => 
      <p className='list-items'>{ele}</p>
      )
    shelfDif.push(title)
    this.setState({ shelf:shelfDif })
  }
    
  clearShelf() {
    this.setState ({ shelf:[] })
  }

  handleChange = (e) => {
      this.setState({ userInput: e })
    }
    
  searchBook () {
    let filteredArr = this.state.books.filter((ele) => {
      if (ele.title.toLowerCase().includes(this.state.userInput.toLowerCase())){
        return ele.title
      }
    })
    this.setState({ books:filteredArr })
  }

  clearSearch () {
    this.setState({ books:data })
  }
  
 
  render(){
    return (

      <div className="App">
        <header className='header-full'>
          <Header />
          <section className='search' >
            <SearchBar handleChange={this.handleChange} searchBook={this.searchBook} clearSearch={this.clearSearch}/>
          </section>
        </header>
        <body>
          <section className="booklist">
            <BookList books={this.state.books} addToShelf={this.addToShelf} />
          </section>
          <section className='separation-bar'></section>
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
