
import React, { Component, useState } from "react";
import { Table } from "react-bootstrap";
import {Link} from "react-router-dom";

 export class Viewordersbyuser extends Component {
     constructor (props){
    super(props);
    this.state ={orders:[]}
}

refreshlist(){

    fetch(`http://localhost:62027/api/orderbyuser/getOrderdatabyuser/${localStorage.getItem("userid")}`)
    .then(response=>response.json())
    .then(data=>{
        this.setState({orders:data});
        //alert("data recieved");
    });
}

componentDidMount(){
    this.refreshlist();
}

componentDidUpdate(){
    this.refreshlist();
}

render(){
    const {orders} =this.state;
    let user = localStorage.getItem('userloggedin');
    return(
        <div className="container">
             <div className="text-center py-4"><hr/>
                    <p> Hello {user}</p><hr/>
                    </div> 
      <Table className="mt-4" striped bordered hover size="sm">
          <thead>
              <tr>
              <th>OrderId</th>
              <th>OrderNumber</th>
              <th>UserId</th>
              <th>MedicineId</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              </tr>
          </thead>
          <tbody>
              {orders.map(order=>
              <tr key={order.orderbyUserId}>
                  <td>{order.orderbyUserId}</td>
                  <td>{order.orderNumber}</td>
                  <td>{order.userId}</td>
                  <td>{order.medicineId}</td>
                  <td>{order.quantity}</td>
                  <td>{order.totalAmount}</td>
              </tr>
                )}
                <div className="text-center py-4"><hr/>
                <Link to="/UserMedicine" className="btn btn-warning">Fill your cart</Link>
                    </div> 
          </tbody>
      </Table>
</div> 
    )
}
 }

 export default Viewordersbyuser;