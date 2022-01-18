import React, { Component,useRef} from 'react'
import UserLayout from '../../components/userLayout'
import { Container,Form } from 'react-bootstrap';
import './style.css';
import axios from "axios";
import Select from 'react-select';
// import { useReactToPrint } from 'react-to-print';
import Pdf from "react-to-pdf";
const ref = React.createRef();
// import { useFormik } from "formik";

const initialState = {
    nic:'',
    phone:'',
    date:'',
    time:'',
    quantity:'',
    startingPoint:'',
    endingPoint:''
  
}

class AddBooking extends Component {

constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = initialState;
    //  this.validator = new SimpleReactValidator();
}
  
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value } )}
       

        onSubmit(e)
        {
            e.preventDefault();
            let bookingGroup = {
                nic:this.state.nic,
                phone:this.state.phone,
                date:this.state.date,
                time:this.state.time,
                quantity:this.state.quantity,
                startingPoint: this.state.startingPoint,
                endingPoint:this.state.endingPoint
            };

            axios.post('http://localhost:8065/api/bus/booking',bookingGroup)
        .then(res=>{
            alert('added');

            console.log('added');
        })
        .catch(err =>{
          console.log(err);
        })
        }

        render(){
            return(
             
                <UserLayout>
                <Container>

                    
                <div className="header">
                <div className="headerTitles">
            <span className="headerTitleLg">Booking </span>
          </div>
                    <div className ="container-form">
                   <form onSubmit={this.onSubmit} noValidate>
      <div class="form-group">
        <label htmlFor="name">NIC   </label>
        <input 
         required type="text"
         className="form-control" 
         id="nic"
         name="nic" 
         value={this.state.nic}
         onChange={this.onChange}
         placeholder="Enter Your NIC"
         />
         
       
             {/* {this.validator.message('StudentGroupId', this.state.StudentGroupId, 'required|min:1|max:5',{ className: 'text-danger' })} */}
         
      </div>

      <div class="form-group">
        <label for="des">Contact No</label>
        <input 
        required type="text" 
         className="form-control" 
         id="phone" 
         name="phone" 
         value={this.state.phone}
         onChange={this.onChange}
         placeholder="Enter Contact number"
         />
       
             {/* {this.validator.message('email', this.state.email, 'required|email', { className: 'text-danger' })} */}
      </div>

      <div class="form-group">
        <label for="des">Date</label>
        <input 
        required
        type="date" 
         className="form-control" 
         id="date" 
         name="date" 
         value={this.state.date}
         onChange={this.onChange}
         placeholder="Enter Date"/>
        
              {/* {this.validator.message('name', this.state.name, 'required',{ className: 'text-danger' })} */}
      </div>

      <div class="form-group">
        <label for="des">Time</label>
        <input 
        required
        type="time" 
         className="form-control" 
         id="time" 
         name="time" 
         value={this.state.time}
         onChange={this.onChange}
         placeholder="Enter time"/>
        
              {/* {this.validator.message('name', this.state.name, 'required',{ className: 'text-danger' })} */}
      </div>
     
      
      
{/*       
      <label htmlFor="name">Starting City</label>
      <Select
      options={this.state.optionsstartingPoint}
      onChange={this.onSatrtingPointSelected}
      className="basic-multi-select"
      isMulti/>

    <label htmlFor="name">Ending City</label>
      <Select
      options={this.state.optionsendingPoint}
      onChange={this.onendingPointSelected}
      className="basic-multi-select"
      isMulti/> */}
{/* 
      <div className="form-group">
                        <label for="day">To</label>
                        <Form.Control
                            as="select"
                            value={this.state.startingPoint}
                            id="startingPoint"
                            onChange={this.onChange}
                        >
                     
                     <option value="Badulla">Badulla</option>
                     <option value="Colombo">Colombo</option>
                     <option value="Anuradhapura">Anuradhapura</option>
                     <option value="Polonnaruwa">Polonnaruwa</option>
                     <option value="Kurunagala">Kurunagala</option>
                     <option value="Mannar">Mannar</option>
                     <option value="Jaffna">Jaffna</option>
                     <option value="Rathnapura">Rathnapura</option>
                     <option value="Dabulla">Dabulla</option>
                     <option value="Mahiyanganya">Mahiyanganya</option>
                     <option value="Galle">Galle</option>
                     <option value="Mathara">Mathara</option>
                     <option value="Bandarawela">Bandarawela</option>
                     <option value="Kandy">Kandy</option>
                        </Form.Control>
                    </div> */}

     {/* <div className="form-group">
                        <label for="day">From</label>
                        <Form.Control
                            as="select"
                            value={this.state.endingPoint}
                            id="endinPoint"
                            onChange={this.onChange}
                        >
                     
                     <option value="Badulla">Badulla</option>
                     <option value="Colombo">Colombo</option>
                     <option value="Anuradhapura">Anuradhapura</option>
                     <option value="Polonnaruwa">Polonnaruwa</option>
                     <option value="Kurunagala">Kurunagala</option>
                     <option value="Mannar">Mannar</option>
                     <option value="Jaffna">Jaffna</option>
                     <option value="Rathnapura">Rathnapura</option>
                     <option value="Dabulla">Dabulla</option>
                     <option value="Mahiyanganya">Mahiyanganya</option>
                     <option value="Galle">Galle</option>
                     <option value="Mathara">Mathara</option>
                     <option value="Bandarawela">Bandarawela</option>
                     <option value="Kandy">Kandy</option>
                        </Form.Control>
                    </div> */}

  
<div class="form-group">
        <label for="des">To:</label>
        <input 
        required type="text" 
         className="form-control" 
         id="startingPoint" 
         name="startingPoint" 
         value={this.state.startingPoint}
         onChange={this.onChange}
         placeholder="Enter City"
         />
      </div>

      <div class="form-group">
        <label for="des">From:</label>
        <input 
         required type="text" 
         className="form-control" 
         id="endingPoint" 
         name="endingPoint" 
         value={this.state.endingPoint}
         onChange={this.onChange}
         placeholder="Enter City"
         />
      </div>
      
      
      <div class="form-group">
        <label for="des">Quantity</label>
        <input 
         required type="Number" 
         className="form-control" 
         id="quantity" 
         name="quantity" 
         value={this.state.quantity}
         onChange={this.onChange}
         placeholder="Enter Quantity"
         />
   
      </div>
      
      
      
      
      <button type="submit" class="btn btn-primary">Submit</button>
      <button type="submit" class="btn btn-primary"><a href="/payment">Pay</a></button>
    </form>
    
      <div ref={ref}>
                            <h1>Ticket</h1>
                            
                            <p>{this.state.nic}</p>
                            <p>{this.state.phone}</p>
                            <p>{this.state.date}</p>
                            <p>{this.state.time}</p>
                            <p>{this.state.startingPoint}</p>
                            <p>{this.state.endingPoint}</p>
                            <p>{this.state.quantity}</p>
                            
                           
                            
                        </div>
                        <Pdf targetRef={ref} filename="recept.pdf">
                            {({toPdf}) => <button onClick={toPdf}>Capture as PDF</button>}
                        </Pdf>
                 
                   
                </div>
                </div>
                </Container>
               
                
    
            </UserLayout>
            )
        }     

}
export default AddBooking;


// import React, { useState } from "react"
// import axios from 'axios';
// import Layout from '../../components/Layout';
// import { Form } from 'react-bootstrap';



// export default function AddBooking() {

//     const[nic,setNic] = useState("");
//     const [startingPoint,setstartingPoint] = useState("");
//     const[endingPoint,setendingPoint] = useState("");
//     const [date, setDate] = useState();
//     const[time,setTime] = useState();
//     const [quantity, setQuantity] = useState();

//     function sendData(e){
//         e.preventDefault();
       
//         let data ={
//             nic:nic,
//             startingPoint:startingPoint,
//             endingPoint:endingPoint,
//             date:date,
//             time:time,
//             quantity:quantity
//         };
        
//         axios.post( 
//           'http://localhost:8065/api/bus/booking',data
//         ).then(
//             alert("Successfully Added"),  
//             console.log).catch(
              
//                 console.log);

//     }   
//    return (

//     <Layout sidebar>


//     <h2>
//         Booking
//     </h2>
//     <div className="container-form">
//         <form onSubmit={sendData}>
//             <div class="form-group">
//                 <label htmlFor="nic">NIC</label>
//                 <input type ="tex" class="card-num-field" id ="nic" placeholder ="Enter NIC" onChange={(e)=>{
//                       setNic(e.target.value)
//                   }}></input>
                 
//             </div>
//             <div className="form-group">
//                         <label for="day">From:</label>
//                         <Form.Control
//                             as="select"
//                             value={startingPoint}
//                             id="startingPoint"
//                             onChange={(e) => {
//                                 setstartingPoint(e.target.value);
//                             }}
//                         >
                     
//                      <option value="Badulla">Badulla</option>
//                       <option value="Colombo">Colombo</option>
//                       <option value="Anuradhapura">Anuradhapura</option>
//                       <option value="Polonnaruwa">Polonnaruwa</option>
//                       <option value="Kurunagala">Kurunagala</option>
//                       <option value="Mannar">Mannar</option>
//                       <option value="Jaffna">Jaffna</option>
//                       <option value="Rathnapura">Rathnapura</option>
//                       <option value="Dabulla">Dabulla</option>
//                       <option value="Mahiyanganya">Mahiyanganya</option>
//                       <option value="Galle">Galle</option>
//                       <option value="Mathara">Mathara</option>
//                       <option value="Bandarawela">Bandarawela</option>
//                   <option value="Kandy">Kandy</option>
//                         </Form.Control>
//                     </div>
//                     <div className="form-group">
//                         <label for="day">To:</label>
//                         <Form.Control
//                             as="select"
//                             value={endingPoint}
//                             id="endingPoint"
//                             onChange={(e) => {
//                                 setendingPoint(e.target.value);
//                             }}
//                         >
                     
//                      <option value="Badulla">Badulla</option>
//                       <option value="Colombo">Colombo</option>
//                       <option value="Anuradhapura">Anuradhapura</option>
//                       <option value="Polonnaruwa">Polonnaruwa</option>
//                       <option value="Kurunagala">Kurunagala</option>
//                       <option value="Mannar">Mannar</option>
//                       <option value="Jaffna">Jaffna</option>
//                       <option value="Rathnapura">Rathnapura</option>
//                       <option value="Dabulla">Dabulla</option>
//                       <option value="Mahiyanganya">Mahiyanganya</option>
//                       <option value="Galle">Galle</option>
//                       <option value="Mathara">Mathara</option>
//                       <option value="Bandarawela">Bandarawela</option>
//                   <option value="Kandy">Kandy</option>
//                         </Form.Control>
//                     </div>
//             <div class="form-group">
//                 <label htmlFor="date">Date</label>
//                 <input type ="date" class="card-num-field" id ="date" placeholder ="Enter Date" onChange={(e)=>{
//                       setDate(e.target.value)
//                   }}></input>
                 
//             </div>
//             <div class="form-group">
//                 <label htmlFor="time">Time</label>
//                 <input type ="time" class="card-num-field" id ="time" placeholder ="Enter Time"onChange={(e)=>{
//                       setTime(e.target.value)
//                   }}></input>
                 
//             </div>
//             <div class="form-group">
//                 <label htmlFor="quantity">Quantity</label>
//                 <input type ="Number" class="card-num-field" id ="quantity" placeholder ="Enter ticket quantity" onChange={(e)=>{
//                       setQuantity(e.target.value)
//                   }}></input>
                 
//             </div>
//         <button type="submit" class="btn btn-primary">Submit</button>
//         </form>
//     </div>

// </Layout>
//     )
// }
