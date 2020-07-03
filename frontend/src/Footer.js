import React, { Component } from 'react';
import './App.css';
import Aem  from "./aem"


class  Footer extends Component {
  constructor(props){
    super(props)
    this.state = {
 
    }
}
render(){
    return(
        <footer className="footer">
        {Aem.label.Shoppingcart}
      </footer>
    )
}
  }
  export default Footer;