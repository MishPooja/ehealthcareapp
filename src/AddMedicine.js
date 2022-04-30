import React, { useState, useEffect } from "react";
import { ButtonToolbar } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";

const AddMedicine = () => {

    let navigate = useNavigate();
    const [med, setmed] = useState({
        meds: [],
        medName: "",
        medPrice: ""
    });

    const {medName,medPrice } = med;

    const OnInputChange = e => {
        setmed({ ...med, [e.target.name]: e.target.value });

    };

    const addmed = async e => {
        await fetch('http://localhost:62027/api/medicine',{
            method: 'POST',
            headers:{
              'Accept': 'application/json',  
              'Content-type':'application/json'},
              body: JSON.stringify(
                  {
                    medName:med.medName,
                    medPrice:med.medPrice
                  })
              })
              .then (r=>r.json())
              .then(res=>{
              alert('Medicine added successfully');
              navigate("/Medicine");
            window.location.reload(true);
          },
          (error)=>{
              alert('Failed to add medicine');
          });
    }

    return (
        <div className="container py-4">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add Medicine to List</h2>
                <form>
                <div className="py-2">
                        <input
                            type="medName"
                            className="form-control form-control-lg"
                            placeholder="Enter the medName"
                            required
                            name="medName"
                            value={medName}
                            onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className="py-2">
                        <input
                            type="medPrice"
                            className="form-control form-control-lg"
                            placeholder="Enter the medPrice"
                            required
                            name="medPrice"
                            value={medPrice}
                            onChange={e => OnInputChange(e)}
                        />
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-primary" type="button" onClick={(e) => addmed(e)}>Add Medicine</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMedicine;
