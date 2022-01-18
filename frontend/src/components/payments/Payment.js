import React, { useState } from "react"
import axios from 'axios';
import UserLayout from '../../components/userLayout';
import './Payment.css';




export default function Payment() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cardnumber, setCardnumber] = useState("");
    const [date, setDate] = useState("");
    const [cvc, setcvc] = useState();
    const [amount, setamount] = useState();

    


    function sendData(e) {
        e.preventDefault();

        

        let data ={
            name:name,
            email:email,
            cardnumber:cardnumber,
            date:date,
            cvc:cvc,
            amount:amount
        };

     
        // const token = localStorage.getItem('token');

        // console.log('token is '+token);

      

        // const config = {
        //     headers: { Authorization: `Bearer ${token}` }
        // };

        // console.log('user token'+config);
        
        axios.post( 
          'http://localhost:8065/api/payment/create',
          data
        //   config
        ).then(
            alert("successfully added"),
            console.log).catch(console.log)

            .catch(function (error) {
                console.log(error);

            });
    }

    return (
        <UserLayout>

<div className="left-image"></div>
                 
    
    <div className="headerImg">
            <form onSubmit={sendData}>
              <div class ="app-container">
                 
                  <div class ="bottom-box">
                      
                      <button type ="button" class="payment-option-btn">Pay with credit card</button>
                      <div class="card-details">
                          
                          <div class="card-num-field-group">
                              <label>Card Number</label><br/>
                              <input required type ="text" class="card-num-field" id ="cardnumber" placeholder ="xxxx-xxxx-xxxx-xxxx"onChange={(e)=>{
                                  setCardnumber(e.target.value)
                              }}></input>

                          </div>
                          
                          <div class="date-field-group">
                              <label>Date</label><br/>
                              <input required type ="text" class="date-field" id="date" placeholder ="date"onChange={(e)=>{
                                  setDate(e.target.value)
                              }}></input>
                              
                          </div>
                          <div class="cvc-field-group">
                              <label>Cvc</label><br/>
                              <input required type ="number" id ="cvc" class="cvc-field" placeholder ="xxx"onChange={(e)=>{
                                  setcvc(e.target.value)
                              }}></input>
                              
                          </div>
                          <div class="name-field-group">
                              <label>Card holder name</label><br/>
                              <input required type ="text" id = "name" class="name-field" placeholder ="Full name"onChange={(e)=>{
                                  setName(e.target.value)
                              }}></input>
                              
                          </div>
                          <div class="name-field-group">
                              <label>Card holder email</label><br/>
                              <input required type ="text" id = "email" class="name-field" placeholder ="Email"onChange={(e)=>{
                                  setEmail(e.target.value)
                              }}></input>
                              </div>
                               <div class="name-field-group">
                              <label>Amount</label><br/>
                              <input required type ="number" id = "amount" class="name-field" placeholder ="Amount"onChange={(e)=>{
                                  setamount(e.target.value)
                              }}></input>
                              
                          </div>
                          <button type ="button "class="pay-btn">Pay Now</button>
                      </div>
                  </div>
              </div>
            </form>
            </div>
          
        </UserLayout>
    )
}