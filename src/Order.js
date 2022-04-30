import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

export class Order extends Component{
    render(){
        return(
            <div className="mt-5 d-flex justify-content-center">
                  <p>Order Placed Successfully</p>
                  <br/>
                  <div className="text-center py-4"><hr/>
                        <Link to="/UserMedicine" className="btn btn-primary ">Continue Shopping</Link>
                    </div> 
            </div>
        )
    }
}