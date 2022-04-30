import React, { useState, useEffect } from "react";
import { ButtonToolbar , Label } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const EditMedicine = () => {

    let navigate = useNavigate();
    const [med, setmed] = useState({
        meds: [],
        medicineId:"",
        medName: "",
        medPrice: ""
    });

    const {medicineId,medName,medPrice } = med;

    const OnInputChange = e => {
        setmed({ ...med, [e.target.name]: e.target.value });

    };

    const editmed = async e => {
        await fetch('http://localhost:62027/api/medicine',{
            method: 'PUT',
            headers:{
              'Accept': 'application/json',  
              'Content-type':'application/json'},
              body: JSON.stringify(
                  {
                    medicineId:med.medicineId,
                    medName:med.medName,
                    medPrice:med.medPrice
                  })
              })
              .then (r=>r.json())
              .then(res=>{
              alert('Medicine updated successfully');
              navigate("/Medicine");
            window.location.reload(true);
          },
          (error)=>{
              alert('Failed to update medicine');
          });
    }

    return (
        <div className="container py-4">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit Medicine Data</h2>
                <form>
                <div className="py-2">
                        <label
                            type="medicineID"
                            className="form-control form-control-lg"
                            placeholder="Enter the medName" aria-disabled defaultValue={med.medicineId}/>
                    </div>
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
                        <button className="btn btn-primary" type="button" onClick={(e) => editmed(e)}>Update Medicine Data</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditMedicine;
