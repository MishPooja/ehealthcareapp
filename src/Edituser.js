import React, { useState, useEffect } from "react";
import { ButtonToolbar , Label } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Edituser = () => {

    let navigate = useNavigate();
    const [user, setuser] = useState({
        deps: [],
        userName: "",
        password: "",
        age: "",
        contactNo: "",
        email: "",
        funds:"",
        isAdmin:""
    });

    const {userName,email,password,age,contactNo,funds,isAdmin } = user;

    const OnInputChange = e => {
        setuser({ ...user, [e.target.name]: e.target.value });

    };

    const edituser = async e => {
        await fetch('http://localhost:62027/api/user',{
            method: 'PUT',
            headers:{
              'Accept': 'application/json',  
              'Content-type':'application/json'},
              body: JSON.stringify(
                  {
                      userId:localStorage.getItem("userid"),
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
              alert('Profile updated successfully');
              navigate("/Viewuser");
            window.location.reload(true);
          },
          (error)=>{
              alert('Failed to update profile');
          });
    }

    return (
        <div className="container py-4">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit Profile Data </h2>
                <form>
                <div className="py-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Nitish"
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
                            placeholder="passoword"
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
                            placeholder="Nitish@abc.com"
                            required
                            name="email"
                            value={email}
                            onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className="py-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="32"
                            required
                            name="age"
                            value={age}
                            onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className="py-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="1234567890"
                            required
                            name="contactNo"
                            value={contactNo}
                            onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className='py-2'>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="No"
                            name="isAdmin"
                            value={isAdmin}
                            onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className='py-2'>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="1000"
                            name="funds"
                            value={funds}
                            onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-warning" type="button" onClick={(e) => edituser(e)}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edituser;
