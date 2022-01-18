import React from 'react'
import './Cards.css';

function Card({ title, date, conductor, venue,time }) {
    
    return (
        
            <div className="card-cont">
                <div className="card-tit">
                    <h3>{title}</h3>
                </div>
            
                    <div className="card-cont">
                        <div className="card-nam">
                            <h8>Date:{date}</h8>
                        </div>
                    
                        <div className="card-cont">
                        <div className="card-nam">
                            <h8>Venue:{venue}</h8>
                        </div>

                        <div className="card-cont">
                        <div className="card-nam">
                            <h8>Time:{time}</h8>
                        </div>
                        <div className="card-cont">
                        <div className="card-nam">
                            <h8>Conductor:{conductor}</h8>
                        </div>

                    </div>
              </div>
            </div>
           </div>
            &nbsp;&nbsp;
        </div>
     
    )
}
export default Card;