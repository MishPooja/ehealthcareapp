
import React, { Component, useState } from "react";
import { Table } from "react-bootstrap";
import {Link} from "react-router-dom";

 class Viewuser extends Component {
     constructor (props){
    super(props);
    this.state ={userdata:[]}
}

refreshlist(){

    fetch('http://localhost:62027/api/user/GetUsers/Nitish@abc.com')
    .then(response=>response.json())
    .then(data=>{
        this.setState({userdata:data});
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
    const {userdata} =this.state;
    let user = localStorage.getItem('userloggedin');
    return(
        <div className="container">
             <div className="text-center py-4"><hr/>
                    <p> Hello {user}</p><hr/>
                    </div> 
      <Table className="mt-4" striped bordered hover size="sm">
          <thead>
              <tr>
                  <th>UserId</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Contact</th>
                  <th>Funds</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>{userdata.userId}</td>
                  <td>{userdata.userName}</td>
                  <td>{userdata.email}</td>
                  <td>{userdata.age}</td>
                  <td>{userdata.contactNo}</td>
                  <td>{userdata.funds}</td>
                  <td><Link to="/Edituser" className="btn btn-warning ">Edit your profile</Link></td>
              </tr>
          </tbody>
      </Table>
</div> 
    )
}
 }

 export default Viewuser;