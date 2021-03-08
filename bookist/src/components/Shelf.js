import React, { Component } from "react";
import '../App.css';



class Shelf extends Component {
  


  render() {
    return (
    <section>
      <span>{this.props.shelf}</span>
    </section>
    )
  }
}


export default Shelf
