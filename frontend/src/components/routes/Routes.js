import React, { useState } from "react"
import axios from 'axios';
import Layout from '../../components/Layout';
import './style.css';
import {Add} from './Add'



export default function Routes() {

    const[routeId,setrouteId] = useState("");
    const [startingPoint,setstartingPoint] = useState("");
    const[endingPoint,setendingPoint] = useState("");
    const [totalkm, settotalkm] = useState();
    const[chargersPerKm,setchargersPerKm] = useState();
    const [maxCreditLimit, setmaxCreditLimit] = useState();

    function sendData(e){
        e.preventDefault();
       
        let data ={
            routeId:routeId,
            startingPoint:startingPoint,
            endingPoint:endingPoint,
            totalkm:totalkm,
            chargersPerKm:chargersPerKm,
            maxCreditLimit:maxCreditLimit
        };
        
        axios.post( 
          'http://localhost:8065/api/route/create',data
        ).then(
            alert("Successfully Added"),  
            console.log).catch(
                //alert("There are some Error"),
                console.log);


    }   
   return (

    <Layout sidebar>

<div className="header">
            <div className="headerTitles">
        <span className="headerTitleLg">Add Routes</span>
      </div>
    <div className="container-form">
        <form onSubmit={sendData} className="container-form">
            <div class="form-group">
                <label htmlFor="name">Route Id</label><br/>
                <input required type ="Number" class="card-num-field"  className="form-control"  id ="routeid" placeholder =""onChange={(e)=>{
                      setrouteId(e.target.value)
                  }}></input>
                 
            </div>
            <div class="form-group">
                <label htmlFor="startingPoint">Starting Point</label><br/>
                <input required type ="text" class="card-num-field" id ="startingPoint"  className="form-control" placeholder =""onChange={(e)=>{
                      setstartingPoint(e.target.value)
                  }}></input>
                 
            </div>
            <div class="form-group">
                <label htmlFor="endingPoint">Ending Point</label><br/>
                <input required type ="text" class="card-num-field" id ="startingPoint"  className="form-control" placeholder =""onChange={(e)=>{
                      setendingPoint(e.target.value)
                  }}></input>
                 
            </div>
            <div class="form-group">
                <label htmlFor="totalkm">Total km</label><br/>
                <input required type ="Number" class="card-num-field" id ="totalkm"  className="form-control" placeholder =""onChange={(e)=>{
                      settotalkm(e.target.value)
                  }}></input>
                 
            </div>
            <div class="form-group">
                <label htmlFor="chargersPerKm">Chargers Per KM</label><br/>
                <input required type ="Number" class="card-num-field" id ="chargersPerKm" className="form-control"  placeholder ="" onChange={(e)=>{
                      setchargersPerKm(e.target.value)
                  }}></input>
                 
            </div>
            <div class="form-group">
                <label htmlFor="maxCreditLimit">Max Credit Limit</label>
                <input required type ="Number" class="card-num-field" id ="maxCreditLimit"  className="form-control"  value={Add(totalkm ,chargersPerKm)} placeholder ={totalkm * chargersPerKm}onChange={(e)=>{
                      setmaxCreditLimit(e.target.value)
                  }}></input>
                 
            </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>

</div>


</Layout>
    )
}

