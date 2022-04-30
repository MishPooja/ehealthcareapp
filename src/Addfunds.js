import React, { useState, useEffect } from "react";
import { ButtonToolbar } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";

const Addfunds = () => {

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

    const {funds } = user;

    const OnInputChange = e => {
        setuser({ ...user, [e.target.name]: e.target.value });

    };

    const addfunds = async e => {
        await fetch(`http://localhost:62027/api/user/AddFunds/${localStorage.getItem("userid")}/${user.funds}`,{
            method: 'PUT',
            headers:{
              'Accept': 'application/json',  
              'Content-type':'application/json'},
              body: JSON.stringify(
                  {
                  })
              })
              .then (r=>r.json())
              .then(res=>{
              alert('Funds Added successfully');
          },
          (error)=>{
              alert('Failed to add funds');
          });
    }

    return (
        <div className="container py-4">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add Funds in your account</h2>
                <form>
                <div className="py-2">
                        <input
                            type="funds"
                            className="form-control form-control-lg"
                            placeholder="Enter the funds to be added"
                            required
                            name="funds"
                            value={funds}
                            onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-primary" type="button" onClick={(e) => addfunds(e)}>Add Funds to your account</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addfunds;
