
import React, { useState ,useEffect} from 'react'
import Layout from '../Layout'

import { Container, Row, Col, Table } from 'react-bootstrap';
import Input from '../UI/Input';
import Modal from '../UI/Modal';

import axios from "axios";
//import './style.css';
//create products function
    const BookingList = (props) => {
    
    const [BookingList, setBookingList] = useState([]);
    const [bookingDetailModal, setBookingDetails] = useState(null);
    const [searchresult, setSearchresult] = useState(null);
    const [updateDetailModal, setupdateDetails] = useState(null);
    const [deleteDetailModal, setDeleteDetails] = useState(null);
    const [searchDetailModal, setSearchDetails] = useState(null);

    const [nic, setNic] = useState("");
    const [phone, setPhone] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [quantity, setQuantity] = useState("");
    const [startingPoint, setStartingPoint] = useState("");
    const [endingPoint, setEndingPoint] = useState("");
    const [searchid, setSearchid] = useState("");

    const submitBookingForm = (id) => {
        let data = {
            nic:nic,
            phone:phone,
            date:date,
            time:time,
            startingPoint:startingPoint,
            endingPoint:endingPoint,
            quantity:quantity
          

            
        }

        console.log(id);
        axios.put(`http://localhost:8065/api/booking/edit/${id}`, data)
            .then(res => {
                alert("approved");
                console.log(data);
                console.log('added');
            })
        // dispatch(addProduct(form)).then(() => setShow(false));
    };
    const Searchresult = (id) => {
        let data = {
            nic: id,
        }

        axios.post(`http://localhost:8065/api/booking/search`,data)
            .then(res => {
                setSearchresult(res.data.data)

            })
        //dispatch(addProduct(form)).then(() => setShow(false));
    };
    useEffect(() => {
        function getBookingList() {
            axios.get("http://localhost:8065/api/booking/getall").then((res) => {
                console.log(res.data.data);
                console.log("res.data");
                setBookingList(res.data.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getBookingList();
    }, [])
   
   
    const handleCloseBookingDetailsModal = () => {
        setBookingDetails(false);
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
    const showBookingDetailModal = (booking) => {

        setBookingDetails(booking);
        //setProductDetailModal(true);
        console.log('nnn'+booking);

    }
    const UpdateDetailModal = (booking) => {

        setupdateDetails(booking);
        //setProductDetailModal(true);
        console.log('nnn' + booking);

    }
    const DeleteDetailModal = (booking) => {

        setDeleteDetails(booking);
        //setProductDetailModal(true);
        console.log('nnn' + booking);

    }
    const SearchDetailModal = (booking) => {

        setSearchDetails(booking);
        //setProductDetailModal(true);
        console.log('nnn' + booking);

    }
    const renderBookingDetailsModal = () => {

        if (!bookingDetailModal) {
            return null;
        }
        console.log('nnn');

        
       return (
            <Modal
                show={bookingDetailModal}
                handleClose={handleCloseBookingDetailsModal}
                modalTitle={'Booking Details'}
                size="lg"

            >
                <Row>
                <Col md="6">
                        <label className="key">NIC:</label>
                        <p className="key">{bookingDetailModal.nic}</p>
                    </Col> 
                    <Col md="6">
                        <label className="key">From:</label>
                        <p className="key">{bookingDetailModal.startingPoint}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">To:</label>
                        <p className="key">{bookingDetailModal.endingPoint}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Time:</label>
                        <p className="key">{bookingDetailModal.time}</p>
                    </Col>
                  
                </Row>
                <Row>
                <Col md="6">
                        <label className="key">Date</label>
                        <p className="key">{bookingDetailModal.date}</p>
                    </Col>
                   
                    <Col md="6">
                        <label className="key">Contact Number</label>
                        <p className="key">{bookingDetailModal.phone}</p>
                    </Col>

                    <Col md="6">
                        <label className="key">Quantity</label>
                        <p className="key">{bookingDetailModal.quantity}</p>
                    </Col>
                   
                    
                </Row>
               
               
                

            </Modal>
        );
    }
    const renderDeleteDetailsModal = () => {

        if (!deleteDetailModal) {
            return null;
        }
       
        return (
            <Modal
                show={deleteDetailModal}
                handleClose={handleCloseDeleteDetailsModal}
                modalTitle={'Delete Ticket'}
                size="lg"

            >
                <Row>
                <Col md="6">
                        <label className="key">To:</label>
                        <p className="key">{deleteDetailModal.startingPoint}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">From:</label>
                        <p className="key">{deleteDetailModal.endingPoint}</p>
                    </Col>
                   
                    <Col md="6">
                        <label className="key">Time</label>
                        <p className="key">{deleteDetailModal.time}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Date</label>
                        <p className="key">{deleteDetailModal.date}</p>
                    </Col>
                </Row>
                <Row>
                   
                    <Col md="6">
                        <label className="key">contact Number</label>
                        <p className="key">{deleteDetailModal.phone}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Quantity</label>
                        <p className="key">{deleteDetailModal.quantity}</p>
                    </Col>
                   

                </Row>
                
                <Row>
                    <Col md="6">
                        <button className="userListDel" onClick={e =>
                            axios.delete(`http://localhost:8065/api/booking/del/${deleteDetailModal._id}`)
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

        return (
            <Modal
                show={updateDetailModal}
                handleClose={handleCloseUpdateDetailsModal}
                modalTitle={'Update Booking Details'}
                size="lg"

            >
                <Row>
                <Input
                        label="From"
                        value={startingPoint}
                        placeholder={updateDetailModal.startingPoint}
                        onChange={(e) => setStartingPoint(e.target.value)}
                    />
                    <Input
                        label="To"
                        value={endingPoint}
                        placeholder={updateDetailModal.endingPoint}
                        onChange={(e) => setEndingPoint(e.target.value)}
                    />
                <Input
                        label="Date"
                        value={date}
                        placeholder={updateDetailModal.date}
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <Input
                        label="Time"
                        value={time}
                        placeholder={updateDetailModal.time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                   
                    <Input
                        label="Contact Number"
                        value={phone}
                        placeholder={updateDetailModal.phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                     <Input
                        label="Quantity"
                        value={quantity}
                        placeholder={updateDetailModal.quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                  
                    <Col md="6">
                        {/* <button className="userListDel"
                        >Delete</button> */}
                        <button className="userListEdit4" onClick={e => submitBookingForm(updateDetailModal._id)
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

        return (
            <Modal
                show={searchresult}
                handleClose={handleCloseSearchDetailsModal}
                modalTitle={'Your Seach Result'}
                size="lg"

            >
                <Row>

                <Input
                        label="To"
                        value={startingPoint}
                        placeholder={searchresult.startingPoint}
                        onChange={(e) => setStartingPoint(e.target.value)}
                    />
                    <Input
                        label="From"
                        value={endingPoint}
                        placeholder={searchresult.endingPoint}
                        onChange={(e) => setEndingPoint(e.target.value)}
                    />
                
                <Input
                        label="Date"
                        value={date}
                        placeholder={searchresult.date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <Input
                        label="Time"
                        value={time}
                        placeholder={searchresult.time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                  
                    <Input
                        label="Contact Number"
                        value={phone}
                        placeholder={searchresult.phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <Input
                        label="Quantity"
                        value={quantity}
                        placeholder={searchresult.quantity}
                        onChange={(e) => setQuantity(e.target.value)}
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
                        <h3>Ticket</h3>
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
                        <th>NIC</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Contact</th>
                        <th>Quantity</th>
                        <th>Action</th>
                        

                    </tr>
                    {/*  */}
                </thead>
                <tbody>{BookingList.map((BookingList, index) => (
                            <tr >
                                
                                <td onClick={() => showBookingDetailModal(BookingList)}
                            key={BookingList._id}>{BookingList.nic}</td>
                                <td>{BookingList.startingPoint}</td>
                                <td>{BookingList.endingPoint}</td>
                                <td>{BookingList.date}</td>
                                <td>{BookingList.time}</td>
                                <td>{BookingList.phone}</td>
                              
                                <td>{BookingList.quantity}</td>
                              
                                <td>
                                        {/* <DeleteOutline
                                      className="productListDelete"
                                      // onClick={() => handleDelete(params.row.id)}
                                    /> */}

                                        <button className="userListDel" onClick={() => DeleteDetailModal(BookingList)}
                                        >Delete</button>


                                        <button className="userListEdit3" onClick={() => UpdateDetailModal(BookingList)}>Edit</button> 
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
           
            {renderBookingDetailsModal()} 
            {renderUpdateDetailsModal()}
            {renderDeleteDetailsModal()}
            {renderSearchDetailsModal()}
            

        </Layout>
    )
}

export default BookingList