import React, { Component } from "react"
import '../App.css';



class BookList extends Component {
  constructor(props){
    super(props)
  }
  

  render (){
    
    let mappedBooks = this.props.books.map((ele,i) => 
      <li>
        <img onClick={() => this.props.addToShelf(ele.title)} className='book-img' src={ele.img}/>
        <p className='title'>{ele.title}</p>
        <p className='author'>by {ele.author}</p>
      </li>
    )

    return ( 
    <main>
      {mappedBooks}
    </main>
    )

    
  }

}

export default BookList