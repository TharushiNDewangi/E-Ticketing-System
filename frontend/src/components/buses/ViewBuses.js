
import React, { useState ,useEffect} from 'react'
import Layout from '../Layout'

import { Container, Row, Col, Table } from 'react-bootstrap';
import Input from '../UI/Input';
import Modal from '../UI/Modal';

import axios from "axios";
//import './style.css';
//create products function
const Buses = (props) => {
    
    const [buses, setbuses] = useState([]);
    const [busDetailModal, setBusDetails] = useState(null);
    const [searchresult, setSearchresult] = useState(null);
    const [updateDetailModal, setupdateDetails] = useState(null);
    const [deleteDetailModal, setDeleteDetails] = useState(null);
    const [searchDetailModal, setSearchDetails] = useState(null);

    const [time, setTime] = useState("");
    const [drivername, setdrivername] = useState("");
    const [contact, setContact] = useState("");
    const [city, setcity] = useState("");
    const [searchid, setSearchid] = useState("");

    const submitBusForm = (id) => {
        let data = {
            time:time,
            drivername: drivername,
            contact: contact,
            city:city,

            
        }

        console.log(id);
        axios.put(`http://localhost:8065/api/bus/edit/${id}`, data)
            .then(res => {
                alert("approved");
                console.log(data);
                console.log('added');
            })
        // dispatch(addProduct(form)).then(() => setShow(false));
    };
    const Searchresult = (id) => {
        let data = {
            platenumber: id,
        }
        
        console.log("id :");
        console.log(data);
        axios.post(`http://localhost:8065/api/bus/sech`,data)
            .then(res => {
                console.log(res.data.data);
                setSearchresult(res.data.data)
                console.log('added');
                console.log(res.data);
            })
        //dispatch(addProduct(form)).then(() => setShow(false));
    };
  console.log("ddddd");
    useEffect(() => {
        function getBuses() {
            axios.get("http://localhost:8065/api/bus/viewbuses").then((res) => {
                console.log(res.data.data);
                console.log("res.data");
                setbuses(res.data.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getBuses();
    }, [])
   
   
    const handleCloseBusDetailsModal = () => {
        setBusDetails(false);
    }

    
    const handleCloseUpdateDetailsModal = () => {
        setupdateDetails(false);
    }
    const handleCloseDeleteDetailsModal = () => {
        setDeleteDetails(false);
    }
    const handleCloseSearchDetailsModal = () => {
        setSearchresult(false);
    }
    //show product detail modal
    const showBusDetailModal = (bus) => {

        setBusDetails(bus);
        //setProductDetailModal(true);
        console.log('nnn'+bus);

    }
    const UpdateDetailModal = (bus) => {

        setupdateDetails(bus);
        //setProductDetailModal(true);
        console.log('nnn' + bus);

    }
    const DeleteDetailModal = (bus) => {

        setDeleteDetails(bus);
        //setProductDetailModal(true);
        console.log('nnn' + bus);

    }
    const SearchDetailModal = (bus) => {

        setSearchDetails(bus);
        //setProductDetailModal(true);
        console.log('nnn' + bus);

    }
    const renderBusDetailsModal = () => {

        if (!busDetailModal) {
            return null;
        }
        console.log('nnn');

        
       return (
            <Modal
                show={busDetailModal}
                handleClose={handleCloseBusDetailsModal}
                modalTitle={'Bus Details'}
                size="lg"

            >
                <Row>
                <Col md="6">
                        <label className="key">Plate Number</label>
                        <p className="key">{busDetailModal.platenumber}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">time</label>
                        <p className="key">{busDetailModal.time}</p>
                    </Col>
                  
                </Row>
                <Row>
                <Col md="6">
                        <label className="key">drivername</label>
                        <p className="key">{busDetailModal.drivername}</p>
                    </Col>
                   
                    <Col md="6">
                        <label className="key">Contact</label>
                        <p className="key">{busDetailModal.contact}</p>
                    </Col>
                   
                    
                </Row>
               
               
                

            </Modal>
        );
    }
    const renderDeleteDetailsModal = () => {

        if (!deleteDetailModal) {
            return null;
        }
        console.log('nnn');
        return (
            <Modal
                show={deleteDetailModal}
                handleClose={handleCloseDeleteDetailsModal}
                modalTitle={'Delete Bus'}
                size="lg"

            >
                <Row>
                    {/* <Col md="6">
                        <label className="key">Plate Number</label>
                        <p className="key">{deleteDetailModal.platenumber}</p>
                    </Col> */}
                    <Col md="6">
                        <label className="key">Time</label>
                        <p className="key">{deleteDetailModal.time}</p>
                    </Col>
                </Row>
                <Row>
                   
                    <Col md="6">
                        <label className="key">Driver name</label>
                        <p className="key">{deleteDetailModal.drivername}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">contact</label>
                        <p className="key">{deleteDetailModal.contact}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">city</label>
                        <p className="key">{deleteDetailModal.city}</p>
                    </Col>
                   

                </Row>
                
                <Row>
                    <Col md="6">
                        <button className="userListDel" onClick={e =>
                            axios.delete(`http://localhost:8065/api/bus/del/${deleteDetailModal._id}`)
                                .then(res => {
                                    alert("approved");
                                    console.log('added');
                                })}>Delete</button>

                        {/* <button className="userListEdit" >Edit</button> */}


                    </Col>
                </Row>


            </Modal>
        );
    }
    const renderUpdateDetailsModal = () => {

        if (!updateDetailModal) {
            return null;
        }
        console.log('dewnnn');
        return (
            <Modal
                show={updateDetailModal}
                handleClose={handleCloseUpdateDetailsModal}
                modalTitle={'Update Bus Details'}
                size="lg"

            >
                <Row>
                    <Input
                        label="Time"
                        value={time}
                        placeholder={updateDetailModal.time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    <Input
                        label="Driver name"
                        value={drivername}
                        placeholder={updateDetailModal.drivername}
                        onChange={(e) => setdrivername(e.target.value)}
                    />
                    <Input
                        label="Contact"
                        value={contact}
                        placeholder={updateDetailModal.contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                     <Input
                        label="City"
                        value={city}
                        placeholder={updateDetailModal.city}
                        onChange={(e) => setcity(e.target.value)}
                    />
                  
                    <Col md="6">
                        {/* <button className="userListDel"
                        >Delete</button> */}
                        <button className="userListEdit4" onClick={e => submitBusForm(updateDetailModal._id)
                        }
                        >Edit</button>


                    </Col>
                    <Col md="6">

                    </Col>
                </Row>






            </Modal>
        );
    }
    const renderSearchDetailsModal = () => {

        if (!searchresult) {
            return null;
        }
        console.log('dewnnn');
        return (
            <Modal
                show={searchresult}
                handleClose={handleCloseSearchDetailsModal}
                modalTitle={'Your Seach Result'}
                size="lg"

            >
                <Row>
                    <Input
                        label="Time"
                        value={time}
                        placeholder={searchresult.time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    <Input
                        label="Driver Name"
                        value={drivername}
                        placeholder={searchresult.drivername}
                        onChange={(e) => setdrivername(e.target.value)}
                    />
                    <Input
                        label="Contact"
                        value={contact}
                        placeholder={searchresult.contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                   
                    <Col md="6">
                        <button className="userListDel2"
                        >Delete</button>
                        <button className="userListEditt" 
                        // onClick={e => submitProductForm(updateDetailModal._id)
                        // }
                        >Edit</button>


                    </Col>
                    <Col md="6">

                    </Col>
                </Row>






            </Modal>
        );
    }


   

    return (
        <Layout sidebar>
            <Container>
                
            <Row>
                    <Col >
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h3>Bus</h3>
                            <dv>
                            <input
                                    type="text"
                                    id="header-search"
                                    placeholder="Search student id"
                                    name="s"
                                    onChange={(e) => setSearchid(e.target.value)}
                                />
                                <button className="userListSearch" type="submit" onClick={() => Searchresult(searchid)}>Search</button>
                            </dv>
                                
                           
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col >
                     
                           
                            <Table style={{ fontsize: 12 }} responsive="sm">
                <thead>
                    <tr >
                        <th>Plate Number</th>
                        <th>Time</th>
                        <th>Driver Name</th>
                        <th>Contact</th>
                        <th>City</th>
                        <th>Action</th>
                        

                    </tr>
                    {/*  */}
                </thead>
                <tbody>{buses.map((buses, index) => (
                            <tr >
                                
                                <td onClick={() => showBusDetailModal(buses)}
                            key={buses._id}>{buses.platenumber}</td>
                                <td>{buses.time}</td>
                                <td>{buses.drivername}</td>
                                <td>{buses.contact}</td>
                                <td>{buses.city}</td>
                              
                                <td>
                                        {/* <DeleteOutline
                                      className="productListDelete"
                                      // onClick={() => handleDelete(params.row.id)}
                                    /> */}

                                        <button className="userListDel" onClick={() => DeleteDetailModal(buses)}
                                        >Delete</button>


                                        <button className="userListEdit3" onClick={() => UpdateDetailModal(buses)}>Edit</button> 
                                    </td>
                              

                            </tr>))}
                </tbody>
            </Table>
                           
                       

                    </Col>
                </Row>
                <Row>
                    <Col>
                       
                    </Col>

                </Row>
            </Container>
           
            {renderBusDetailsModal()} 
            {renderUpdateDetailsModal()}
            {renderDeleteDetailsModal()}
            {renderSearchDetailsModal()}
            

        </Layout>
    )
}

export default Buses