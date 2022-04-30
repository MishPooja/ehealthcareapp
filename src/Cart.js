
import React, { Component, useState } from "react";
import { Table } from "react-bootstrap";
import {Link} from "react-router-dom";

 class Cart extends Component {
     constructor (props){
    super(props);
    this.state ={carts:[]}    

}

refreshlist(){
    //const userId = localStorage.getItem('userid');
    fetch(`http://localhost:62027/api/cart/getCartdatabyuser/${localStorage.getItem('userid')}`)
    .then(response=>response.json())
    .then(data=>{
        this.setState({carts:data});
        const total = data.reduce((prev,current)=>prev + current.amount,0);
        localStorage.setItem("total",total);

        //alert("data recieved");
        //console.log(this.carts);
    });
}

componentDidMount(){
    this.refreshlist();
}

componentDidUpdate(){
    this.refreshlist();
}

addquantity(id, amount) {
    fetch(`http://localhost:62027/api/cart/Addmedicinetocart/${id}/${localStorage.getItem("userid")}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify({

        })
    })
        .then(res => res.json())
        .then((result) => {
            //alert(result);
            this.refreshList();
            

        }, (error) => {
            alert('Failed');

        })
};
deletequantity(id, amount) {
    fetch(`http://localhost:62027/api/cart/deletemedicinefromcart/${id}/${localStorage.getItem("userid")}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify({

        })
    })
        .then(res => res.json())
        .then((result) => {
           //alert(result);
            this.refreshList();
            

        }, (error) => {
            alert('Failed');

        })
};
deleteitem(id) {
    if (window.confirm('Are you sure?')) {
    fetch(`http://localhost:62027/api/cart/deletemedicine/${id}/${localStorage.getItem("userid")}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify({

        })
    })
        .then(res => res.json())
        .then((result) => {
            alert(result);
            this.refreshList();
            

        }, (error) => {
            alert('Failed');

        })
    }
};



render(){
    const {carts} =this.state;
    let user = localStorage.getItem('userloggedin');
    return(
        <div className="container">
             <div className="text-center py-4"><hr/>
                    <p> Hello {user}</p><hr/>
                    </div> 
      <Table className="mt-4" striped bordered hover size="sm">
          <thead>
              <tr>
                <th>CartId</th>
              <th>UserId</th>
              <th>MedicineId</th>
              <th>Quantity</th>
              <th>Amount</th>
              </tr>
          </thead>
          <tbody>
              {carts.map(cart=>
              <tr key={cart.cartId}>
                  <td>{cart.cartId}</td>
                  <td>{cart.userId}</td>
                  <td>{cart.medicineId}</td>
                  <td>{cart.quantity}</td>
                  <td>{cart.amount}</td>
                  {localStorage.setItem('amount',(cart.amount))}
                  <td><button className="btn btn-primary" type ="button" onClick={() => this.addquantity(cart.medicineId, cart.amount)}><b>+</b></button></td>
                    Qty:{cart.quantity}
                    <td><button className="btn btn-danger" type ="button" onClick={() => this.deletequantity(cart.medicineId, cart.amount)}><b>-</b></button></td>
                    <td><button className="btn btn-danger float end" type ="button" onClick={() => this.deleteitem(cart.medicineId)}>DELETE</button></td>
              </tr>
                )}
                <tr>
                    <td>Total Price : {carts.reduce((prev,current)=>prev + current.amount,0)}</td>
                </tr>
                <tr><Link to="/Checkout" className="btn btn-warning ">Checkout</Link></tr>
          </tbody>
      </Table>
</div> 
    )
}
 }

 export default Cart;