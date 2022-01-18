import React, { Component,useRef} from 'react'
import Layout from '../../components/Layout'
import SimpleReactValidator from 'simple-react-validator';

import { Container } from 'react-bootstrap';
import './style.css';
import axios from "axios";
import Select from 'react-select';
// import { useReactToPrint } from 'react-to-print';
// import Pdf from "react-to-pdf";
// const ref = React.createRef();
// import { useFormik } from "formik";


const initialState = {
    platenumber: '',
    time:'',
    drivername: '',
    contact:'', 
    city:'',
    routes:[],
    options:[],
    selectedroutes:[],
    
    
   
}


class AddBuses extends Component {
    
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onRoutesselected = this.onRoutesselected.bind(this);
        this.state = initialState;
         this.validator = new SimpleReactValidator();
    }
 
    
    
  
        
      
    componentDidMount(){
        axios.get('http://localhost:8065/api/route/viewall')
        .then(res => {
            this.setState({ routes: res.data.data}, () => {
                let data=[];
                this.state.routes.map((item,index) => {
                    let routes ={
                        value: item._id,
                        label: item.routeId
                    }
                    data.push(routes)
                });
                this.setState({ options:data})
            })
        })
       
        }
     
   onChange(e) {
     this.setState({ [e.target.name]: e.target.value } )}
     onRoutesselected(e){
        this.setState({ selectedroutes: e ? e.map(item => item.value) : []});
     }
    

    


    //ddddd
   
    onSubmit(e) 
    {
        if (this.validator.allValid()) {
            alert('You submitted the form and stuff!');
          } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            this.forceUpdate();
          
       
        e.preventDefault();
        let busGroup = {
            platenumber:this.state.platenumber ,
            time:this.state.time,
            drivername: this.state.drivername,
            contact: this.state.contact,
            city: this.state.city,
            routeId: this.state.selectedroutes,
            
        } ;
      
        let currentComponent = this;
        axios.post('http://localhost:8065/api/bus/createbus',busGroup)
        .then(res=>{
           alert('added');

            console.log('added');

            currentComponent.setState({
            platenumber:'',
            time:'',
            drivername:'',
            contact:'',
            city:'',
            routeId:''
        })
        })
        .catch(err =>{
          console.log(err);
        })
        
        // axios.post( 
        //     'http://localhost:8065/api/bus/createbus',busGroup
        //   ).then(
        //       alert("Successfully Added"),
              

             
              
              
        //       ).catch(
        //         //   alert("There are some Error"),
        //           console.log);
  
        //           currentComponent.setState({
        //             percentage: percentage,
        //             lastname: lastname,
        //             imageurl: imageurl,
        //             id: id,
        //             token:token
        //           });
    
    }
}



    render(){
        return(
            
            <Layout sidebar>
            <Container>
                
            <div className="header">
            <div className="headerTitles">
        <span className="headerTitleLg">Add Buses</span>
      </div>
                <div className ="container-form">
               <form onSubmit={this.onSubmit} noValidate>
  <div class="form-group">
    <label htmlFor="name">Plate Number</label>
    <input 
     type="text"
     className="form-control" 
     id="platenumber"
     name="platenumber" 
     value={this.state.platenumber}
     onChange={this.onChange}
     placeholder="Enter plate number"
     />
     
   
         {this.validator.message('platenumber', this.state.platenumber, 'required|min:1|max:10',{ className: 'text-danger' })}
     
  </div>
  <div class="form-group">
    <label for="des">Time</label>
    <input 
    required
    type="text" 
     className="form-control" 
     id="time" 
     name="time" 
     value={this.state.time}
     onChange={this.onChange}
     placeholder="Enter time"/>
    
          {this.validator.message('time', this.state.time, 'required',{ className: 'text-danger' })}
  </div>
  <div class="form-group">
    <label for="des">Driver Name</label>
    <input 
     type="drivername" 
     className="form-control" 
     id="drivername" 
     name="drivername" 
     value={this.state.drivername}
     onChange={this.onChange}
     placeholder="Enter name"
     />
   
         {/* {this.validator.message('name', this.state.email, 'required', { className: 'text-danger' })} */}
  </div>
  <div class="form-group">
    <label for="des">Contact Number</label>
    <input 
     type="number" 
     className="form-control" 
     id="contact" 
     name="contact" 
     value={this.state.contact}
     onChange={this.onChange}
     placeholder="Enter Contact number"
     />
   
         {this.validator.message('contact', this.state.contact, 'required', { className: 'text-danger' })}
  </div>
  
  <label htmlFor="name">Route Number</label>
  <Select
  options={this.state.options}
  onChange={this.onRoutesselected}
  className="basic-multi-select"
  isMulti/>
 


  

  
  <div class="form-group">
    <label for="des">City</label>
    <input 
     type="text" 
     className="form-control" 
     id="city" 
     name="city" 
     value={this.state.city}
     onChange={this.onChange}
     placeholder="Enter City"
     />
    
      {this.validator.message('city', this.state.city, 'required')}
  </div>
  
  
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

 
               
            </div>
            </div>
            </Container>
           
            

        </Layout>
        )
    }
}
export default AddBuses;