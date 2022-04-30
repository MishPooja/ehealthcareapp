import React, { useState, useEffect } from "react";
import { ButtonToolbar } from "react-bootstrap";
import { useNavigate} from "react-router-dom";

const Logout = () => {

    let navigate = useNavigate();
    let user = localStorage.getItem('userloggedin');

}
const logout = async e => {
    localStorage.clear;
    navigate("/");
}


export default Logout;