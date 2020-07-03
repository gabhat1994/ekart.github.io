import React, { Component } from 'react';
import './App.css';
import Modal from './MOdal'
import Aem from "./aem"
import Header from "./Header"
import Footer from "./Footer"
import Cart from "./Cart"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }




  render() {
    return (
      <div className="grid-container">
        <Header />
        <main className="main">
        <Cart />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
