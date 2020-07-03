import React, { Component } from 'react';
import './App.css';
import Aem  from "./aem"
import Modal from './MOdal'

class  Cart extends Component {
  constructor(props){
    super(props)
    this.state = {
        isLoaded :false,
        products : null,
        totalQuantity:0,
        totalPrice:0,
        openModal:false 
      }
      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)
      this.addToCart = this.addToCart.bind(this)
      this.checkout= this.checkout.bind(this)
      this.closed = this.closed.bind(this)
}

componentDidMount() {

    const url ="./data.json";
    fetch(url).then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result.products
          });
        },
       
      )
  }

  increment(id) {
    const data = this.state.products
      for (var i=0; i < data.length; i++) {
        if (data[i].id === id) {
          data[i].QTY =  data[i].QTY + 1
          let q = this.state.totalQuantity + 1
          let p = this.state.totalPrice + data[i].price
          this.setState({products : data , totalQuantity:q , totalPrice : p })
        }
    }
    
  }
  
  checkout(){
   
    if(this.state.totalPrice != 0 && this.state.totalQuantity != 0){
    
      this.setState({openModal : true})
   
    }
   
  }
  
  closed(){
  
   this.setState({openModal:false , totalQuantity:0,
    totalPrice:0, })
    const data = this.state.products
      for (var i=0; i < data.length; i++) {
        if (data[i].QTY > 0) {
          data[i].QTY = 0
          this.setState({products : data    })
        }
      }
  
  }
  
  addToCart(product){
    const data = this.state.products
    for (var i=0; i < data.length; i++) {
      if (data[i].id === product.id) {
        let quantity = this.state.totalQuantity + product.QTY
        let price = product.QTY > 0 ?  this.state.totalPrice  + ( product.QTY * product.price ) : this.state.totalPrice
        this.setState({ totalQuantity : quantity , totalPrice : price
         })
        data[i].QTY =  data[i].QTY +  product.QTY
  
      
      this.setState({products : data    })
  
      }}
  
       
  }
  
  decrement(id) {
    const data = this.state.products
      for (var i=0; i < data.length; i++) {
        if (data[i].id === id && data[i].QTY != 0) {
          data[i].QTY =  data[i].QTY -  1
          let q = this.state.totalQuantity - 1
          let p = this.state.totalPrice - data[i].price
          this.setState({products : data , totalQuantity:q , totalPrice : p })
        }
    }
    
  }
  
render(){
    return(
        <div className="content">
        { this.state.isLoaded && this.state.products.map( product =>
              <div key = {product.id} className="col-md-12" style ={{marginTop :"70px"}}>
              <div className="col-image">
                <img className="product-image" src={product.image} alt="product" />
        <div className="product-offer">{product.offer}</div>
              </div>
              <div className="col-details">
  
                <div>{product.brand}</div>
                <div>{product.name}</div>
              <div>{product.quantity}</div>
                <div>{product.mrp}</div>
                <div><strong>Rs{product.price}</strong></div>
              </div>
              <br />
              <div className="product-button">
        <button id ={product.id} className="product-che" type="button" onClick={()=>this.addToCart(product)}>{Aem.label.addcart}</button>
              </div>
              <div className="relative">
                <a id={"add"+product.id} className="product-add-button" onClick={()=>this.increment(product.id)}><img scr = "" alt ="Add" /></a>
                <label>{product.QTY}</label>
                <a id={"sub"+product.id} className="product-add-button"  onClick={()=>this.decrement(product.id)} ><img scr = "" alt ="Sub" /></a>
              </div>
              <hr />
            </div> 
        )}
  
        <div className = "row">
          <label>{Aem.label.quantity}</label> : {this.state.totalQuantity}
          <br />
          <label>{Aem.label.total}</label> : {this.state.totalPrice}
          <div className="rel">
          <button type="button"  className="product-checkout"  onClick={()=>this.checkout()}>{Aem.label.checkout}</button>
          </div>
        </div>
        {this.state.openModal && <Modal closed={(value) => this.closed()} totalQuantity={this.state.totalQuantity}  totalPrice= {this.state.totalPrice}  > 
          </Modal>
          }
        
      
          </div>
    )
}
  }
  export default Cart;