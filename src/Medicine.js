
import React, { Component, useState } from "react";
import { Table } from "react-bootstrap";
import {Link} from "react-router-dom";

 class Medicine extends Component {
     constructor (props){
    super(props);
    this.state ={medicines:[]}
}

refreshlist(){

    fetch('http://localhost:62027/api/medicine')
    .then(response=>response.json())
    .then(data=>{
        this.setState({medicines:data});
        console.log("Medicines"+data);
        //alert("data recieved");
    });
}

componentDidMount(){
    this.refreshlist();
}

componentDidUpdate(){
    this.refreshlist();
}

deletemedicine(medicineId)
{
    if(window.confirm('Do you want to delete this medicine?')){
        fetch('http://localhost:62027/api/medicine/'+medicineId,{
            method:'DELETE',
            header:{
                'Accept': 'application/json',  
                'Content-type':'application/json'}
        })
    }
}


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
                  <td><Link to="/EditMedicine" className="btn btn-warning ">Edit Medicine</Link></td>
                  <td><button className="btn btn-warning" type="button" onClick={() => this.deletemedicine(medicine.medicineId)}>Delete Med</button></td>
              </tr>
                )}
                <tr><Link to="/AddMedicine" className="btn btn-warning ">Add Medicine to List</Link></tr>
                <tr><Link to="/AdminRights" className="btn btn-warning ">Navigate back to Admin Home page</Link></tr>
          </tbody>
      </Table>
</div> 
    )
}
 }

 export default Medicine;