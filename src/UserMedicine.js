
import React, { Component, useState } from "react";
import { Table } from "react-bootstrap";
import {Link} from "react-router-dom";

 class UserMedicine extends Component {
     constructor (props){
    super(props);
    this.state ={medicines:[]}
    const userId = localStorage.getItem('userid');
}


refreshlist(){

    fetch('http://localhost:62027/api/medicine')
    .then(response=>response.json())
    .then(data=>{
        this.setState({medicines:data});
        //alert("data recieved");
    });
}

componentDidMount(){
    this.refreshlist();
}

componentDidUpdate(){
    this.refreshlist();
}

addmedicinetocart(medicineId,userId)
{
     fetch(`http://localhost:62027/api/cart/Addmedicinetocart/${medicineId}/${localStorage.getItem("userid")}`,{
            method: 'POST',
            headers:{
              'Accept': 'application/json',  
              'Content-type':'application/json'},
              body: JSON.stringify(
                  {
                    
                  })
              })
              .then (r=>r.json())
              .then(res=>{
              alert('items Added successfully');
            //   navigate("/Cart");
            //     window.location.reload(true);
          },
          (error)=>{
              alert('Failed to add item to cart');
          });
}
// deletemedicinefromcart(medicineId)
// {
//         fetch('http://localhost:62027/api/cart/'+medicineId,{
//             method:'DELETE',
//             header:{
//                 'Accept': 'application/json',  
//                 'Content-type':'application/json'}
//         })
// }

render(){
    const {medicines} =this.state;
    let user = localStorage.getItem('userloggedin');
    return(
        <div className="container">
             <div className="text-center py-4"><hr/>
                    <p> Hello {user}</p><hr/>
                    </div> 
      <Table className="mt-4" striped bordered hover size="sm">
          <thead>
              <tr>
                <th>MedicineId</th>
              <th>Name</th>
              <th>Price</th>
              </tr>
          </thead>
          <tbody>
              {medicines.map(medicine=>
              <tr key={medicine.medicineId}>
                  <td>{medicine.medicineId}</td>
                  <td>{medicine.medName}</td>
                  <td>{medicine.medPrice}</td>
                  {localStorage.setItem('medicineIdtobeadded',(medicine.medicineId))}
                  <td><button className="btn btn-warning" type="button" onClick={() => this.addmedicinetocart(medicine.medicineId)}>Add Med to Cart</button></td>
              </tr>
                )}
          </tbody>
      </Table>
</div> 
    )
}
 }

 export default UserMedicine;