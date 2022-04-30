 import React,{Component} from 'react';
 import { useNavigate} from "react-router-dom";

 const AdminRights =() =>{

        const navigate = useNavigate();
        let user = localStorage.getItem('userloggedin');
         return(
             <div className="d-grid gap-2 col-10 mx-auto">
                    <div class="list-group">
                        <button type="button" class="list-group-item" onClick={() => navigate('/User') }>View Users Data</button>
                        <button type="button" class="list-group-item" onClick={() => navigate('/Medicine') }>View Medicine Data</button>
                        <button type="button" class="list-group-item" onClick={() => navigate('/Vieworders') }>View Order Data </button>
                    </div>
             </div>
         )
     }

     export default AdminRights;