import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    let navigate = useNavigate();

    const proceedtobuy = async e => {
       
        var total = parseFloat(localStorage.getItem("total"));

       await fetch( `http://localhost:62027/api/user/EditFunds/${localStorage.getItem("userid")}/${total}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then((result) => {
                if(result === "Insufficient funds. Please add funds to proceed")
                {
                    alert(result);
                }
                else{
                    fetch(`http://localhost:62027/api/orderbyuser/AddtoOrders/${localStorage.getItem("userid")}/${localStorage.getItem("total")}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then((result) => {
                    alert(result);
                    navigate("/Order");
                    window.location.reload(true);

                }, (error) => {
                    alert('Failed to add item to order');

                })
                }
            }, (error) => {
                alert('Failed in api call');

            })              

    }

        return (
            <div className='container py-4'>
                <div className="border shadow py-4">
                    <h2 className="text-center mb-4">Check Out</h2>
                    <div className='py-4 ' style={{ width: "90%", margin: "auto" }}>
                        <h4 className="mb-3">Billing address</h4>
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input type="text" className="form-control" placeholder="First Name" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input type="text" className="form-control" placeholder="Last Name" required />
                                </div>
                            </div>

                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="you@example.com" />
                            </div>

                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="1234 Main St" required />
                            </div>

                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Apartment or suite" />
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <input type="text" className="form-control" placeholder="Country" required />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <input type="text" className="form-control" placeholder="State" required />
                                </div>
                                <div className="col-md-4 mb-3">

                                    <input type="text" className="form-control" placeholder="Zip" required />

                                </div>
                            </div>
                            <hr />
                            <h4 className="mb-3">Payment</h4>

                            <div className="d-block my-3">
                                <div className="custom-control custom-radio">
                                    <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" defaultChecked required />
                                    <label className="custom-control-label">Wallet</label>
                                </div>
                            </div>

                            <hr className="mb-4"></hr>
                            <button className="btn btn-warning btn-lg btn-block" type="button" onClick={(e) => proceedtobuy(e)}>Proceed to Buy</button>
                        </form>
                    </div>

                </div>
            </div >

        )
    }

export default Checkout;