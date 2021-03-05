import React, { Component } from 'react'
import Header from './components/Header'
import BookList from './components/BookList'
import Shelf from './components/Shelf'
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
  }

  addToShelf (e) {
    for (let i = 0; i < this.state.books.length;i++){
      if (e === this.state.books[i].img){
        this.shelf.push(this.state.books[i].title)
      }
    }
  }


 
  render(){
    return (

      <div className="App">
        <header>
          <Header />
        </header>
        <body>
          <section className="booklist">
            <BookList books={this.state.books} addToShelf={this.addToShelf} />
          </section>
          <section className="my-shelf">
            <Shelf shelf={this.state.shelf}/>
          </section>
        </body>
      </div>
    );
  }
}



export default App;
