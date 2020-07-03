import React, { Component } from 'react';
import './App.css';
import Aem  from "./aem"


class  Header extends Component {
  constructor(props){
    super(props)
    this.state = {
 
    }
}
render(){
    return(
        <header  className="header">{Aem.label.header}</header>
    )
}
  }
  export default Header;