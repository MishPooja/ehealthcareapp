import React, { useState, useEffect } from "react";
import { ButtonToolbar } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";

const Signup = () => {

    let navigate = useNavigate();
    const [user, setuser] = useState({
        deps: [],
        userName: "",
        password: "",
        email: "",
        age: "",
        contactNo: "",
        isAdmin: "",
        funds:""
    });

    const {userName,password, email,age,contactNo,isAdmin,funds } = user;

    const OnInputChange = e => {
        setuser({ ...user, [e.target.name]: e.target.value });

    };

    const signup = async e => {
        await fetch('http://localhost:62027/api/user/Signup',{
            method: 'POST',
            headers:{
              'Accept': 'application/json',  
              'Content-type':'application/json'},
              body: JSON.stringify(
                  {
                      userName:user.userName,
                      password:user.password,
                      email:user.email,
                      contactNo:user.contactNo,
                      age:user.age,
                      isAdmin:false,
                      funds:user.funds
                  })
              })
              .then (r=>r.json())
              .then(res=>{
              alert('User Added successfully');
              navigate("/User");
                window.location.reload(true);
          },
          (error)=>{
              alert('Failed to add user');
          });
    }

    return (
        <div className="container py-4">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Sign Up New</h2>
                <form>
                <div className="py-2">
                        <input
                            type="userName"
                            className="form-control form-control-lg"
                            placeholder="Enter the userName"
                            required
                            name="userName"
                            value={userName}
                            onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className="py-2">
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Enter the password"
                            required
                            name="password"
                            value={password}
                            onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className="py-2">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter the Email"
                            required
                            name="email"
                            value={email}
                            onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className="py-2">
                        <input
                            type="age"
                            className="form-control form-control-lg"
                            placeholder="Enter the age"
                            required
                            name="age"
                            value={age}
                            onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className="py-2">
                        <input
                            type="contactNo"
                            className="form-control form-control-lg"
                            placeholder="Enter the contactNo"
                            required
                            name="contactNo"
                            value={contactNo}
                            onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className='py-2'>
                        <input
                            type="isAdmin"
                            className="form-control form-control-lg"
                            placeholder="Enter the isAdmin"
                            name="isAdmin"
                            value={isAdmin}
                            onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className='py-2'>
                        <input
                            type="funds"
                            className="form-control form-control-lg"
                            placeholder="Enter the funds"
                            name="funds"
                            value={funds}
                            onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-warning" type="button" onClick={(e) => signup(e)}>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
