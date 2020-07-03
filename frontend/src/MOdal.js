import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
class  MOdal extends Component {
    constructor(props){
      super(props)
      this.state = {
        open: true
      }
   this.closeModal = this.closeModal.bind(this)
    }
    
   closeModal(){
     this.setState({open : false})
     this.props.closed(false)
   }
    render(){
        
    return(
       
  <div>
       <Modal isOpen ={this.state.open}   className="modal" >
           <h2>Transcation Successful</h2>
           <p><label>Total Amout  Due</label> : {this.props.totalPrice} </p>
           <p><label>Total Quantity </label> : {this.props.totalQuantity} </p>
           <button  onClick={()=>this.closeModal()}>close</button>
       </Modal>
  </div>
    )
    }
}  

export default MOdal;