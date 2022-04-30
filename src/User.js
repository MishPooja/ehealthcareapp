
import { Button } from "bootstrap";
import React, { Component, useState } from "react";
import { Table } from "react-bootstrap";
import {Link} from "react-router-dom";

 class User extends Component {
     constructor (props){
    super(props);
    this.state ={users:[]}
}

refreshlist(){

    fetch('http://localhost:62027/api/user')
    .then(response=>response.json())
    .then(data=>{
        this.setState({users:data});
        //alert("data recieved");
    });
}

componentDidMount(){
    this.refreshlist();
}

componentDidUpdate(){
    this.refreshlist();
}

deleteuser(userId){
    if(window.confirm('Do you want to delete this user?')){
        fetch('http://localhost:62027/api/user/'+userId,{
            method:'DELETE',
            header:{
                'Accept': 'application/json',  
                'Content-type':'application/json'}
        })
    }
}

render(){
    const {users} =this.state;
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
              <th>Name</th>
              <th>UserEmail</th>
              <th>Age</th>
              <th>contactNo</th>
              <th>Funds</th>
              </tr>
          </thead>
          <tbody>
              {users.map(userdata=>
              <tr key={userdata.userId}>
                  <td>{userdata.userId}</td>
                  <td>{userdata.userName}</td>
                  <td>{userdata.email}</td>
                  <td>{userdata.age}</td>
                  <td>{userdata.contactNo}</td>
                  <td>{userdata.funds}</td>
                  <td><button className="btn btn-warning" type="button" onClick={() => this.deleteuser(userdata.userId)}>Delete User</button></td>
              </tr>
                )}
                 <div className="d-grid gap-2 col-10 mx-auto"><hr/>
                <Link to="/Signup" className="btn btn-warning ">Add User</Link> 
                <Link to="/AdminRights" className="btn btn-warning ">NAvigate to Admin Home Page</Link>
                </div>
          </tbody>

      </Table>
</div> 
    )
}
 }

 export default User;