import React,{Component} from 'react';

export class Contact extends Component{
    render(){
        return(
            <div className="mt-5 d-flex justify-content-left">
                    <div class="jss12">
                        <h1>Contact Us</h1>
                        <div class="jss9">
                             <p class="bold">EHealth Care Enterprise Limited</p>
                            <p>#19, Bishop Gardens,</p>
                            <p>Hitech City,</p>
                            <p>Hyderabad, Telangana - 500084</p>
                        </div><br/>
                        <a href="mailto:contactusnow@apollopharmacy.org">For queries related to Online orders</a><br/>
                        <a href="mailto:contactusnow@apollopharmacy.org">Please contact us at: <span class="jss10">contactusnow@ehealthcare.org</span></a><br/><br/>
                        <a href="mailto:customerservice@apollopharmacy.org">For queries related to E Health Care Store experience</a><br/>
                        <a href="mailto:customerservice@apollopharmacy.org">Please contact us at: <span class="jss10">customerservice@ehealthcare.org</span></a>
                        <br/><br/><a href="mailto:customerservice@apollopharmacy.org">For Corporate and Bulk inquiries</a><br/>
                        <a href="mailto:customerservice@apollopharmacy.org">Please contact us at:<span class="jss10">customerservice@ehealthcare.org</span></a><br/><br/>
                        <a href="mailto:brandlisting@apollopharmacy.org">For launching New Brands on E Health Care</a><br/>
                        <a href="mailto:brandlisting@apollopharmacy.org">Please contact us at: <span class="jss10">brandlisting@ehealthcare.org</span></a><br/></div>
            </div>
        )
    }
}