import React from 'react';
import { useEffect, useState } from "react";
import './Cards.css';
import "./conference.css";
import axios from "axios";
import Card from "./LatestConference";

function Cards() {
  const [conference, setConference] = useState([]);


    useEffect(() => {
        function getConference() {
            axios.get("https://iconconferenceapp.herokuapp.com/api/conference/getconference").then((res) => {
                setConference(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getConference();
    }, [])
  return (
  
    <div class="LetestConference">
    <div class="container">
    <h1>LATEST CONFERENCES</h1>
        <div class="row">
       
            <div class="col">
           <br></br>
           
                <div class="row">
           
                  {conference.filter((p)=>p.status == "approved").map((conference, index) => (
                      <div className="card-container" style = {{ marginLeft : 40 , marginBottom : 40 }}>
                        <Card className="LetestConference"
                            title={conference.title}
                            description={conference.description}
                            date={conference.date}
                            time={conference.time}
                            venue={conference.venue}
                            conductor={conference.conductor}
                            editorname={conference.editorname}
                    
                        />
                        
                        </div>
                    ))}
                      </div> 
                    </div>
                </div>
                </div>
            </div>
          
     
  );
}

export default Cards;