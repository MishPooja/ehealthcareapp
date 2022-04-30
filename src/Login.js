import React, { useState, useEffect } from "react";
import { ButtonToolbar } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";

const Login = () => {

    let navigate = useNavigate();
    const [user, setuser] = useState({
        deps: [],
        userName: "",
        password: "",
        isAdmin: "",
        age: "",
        contactNo: "",
        email: ""
    });

    const { password, email } = user;

    const OnInputChange = e => {
        setuser({ ...user, [e.target.name]: e.target.value });

    };

    const login = async e => {
        await fetch(`http://localhost:62027/api/user/GetUsers/${email}`)
            .then(response => response.json())
            .then((result) => {
                setuser(result);
                if (result.isAdmin === Boolean(false) && result.password === password) {
                    localStorage.setItem('userloggedin',(result.userName));
                    localStorage.setItem('userid',(result.userId));
                    localStorage.setItem('Admin',(result.isAdmin));
                    localStorage.setItem('loggedinuseremail',(result.email));
                    console.log(result.isAdmin);
                    //alert("Loggedin Successfully");
                    navigate("/UserMedicine");
                    window.location.reload(true);
                }
                else if(result.isAdmin=== Boolean(true)  && result.password === password)
                {
                    localStorage.setItem('userloggedin','Admin');
                    alert("logged in as admin");
                    navigate("/AdminRights");
                    window.location.reload(true);
                }
                else{
                        alert("Cant not login. Please enter valid credentials.");
                        window.location.reload(true);
                }
            },(error)=>{
                alert('Failed');
            });
    }

    return (
        <div className="container py-4">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Login</h2>
                <form>
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
                    <div className='py-2'>
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Enter the Password"
                            name="password"
                            value={password}
                            onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-primary" type="button" onClick={(e) => login(e)}>Login</button>
                    </div>
                    <div className="text-center py-4"><hr/>
                        <Link to="/Signup" className="btn btn-primary ">Create your Account</Link>
                    </div> 
                </form>
            </div>
        </div>
    );
};

export default Login;
