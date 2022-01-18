
import React, { useState ,useEffect} from 'react'
import Layout from '../Layout'

import { Container, Row, Col, Table } from 'react-bootstrap';
import Input from '../UI/Input';
import Modal from '../UI/Modal';

import axios from "axios";
//import './style.css';
//create products function
    const PaymentList = (props) => {
    
    const [PaymentList, setPaymentList] = useState([]);
    const [paymentDetailModal, setPaymentDetails] = useState(null);
    const [searchresult, setSearchresult] = useState(null);
    const [updateDetailModal, setupdateDetails] = useState(null);
    const [deleteDetailModal, setDeleteDetails] = useState(null);
    const [searchDetailModal, setSearchDetails] = useState(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cardnumber, setCardNumber] = useState("");
    const [date, setDate] = useState("");
    const [cvc, setCvc] = useState("");
    const [amount, setAmount] = useState("");
    const [searchid, setSearchid] = useState("");

    const submitPaymentForm = (id) => {
        let data = {
            name:name,
            email:email,
            cardnumber:cardnumber,
            date:date,
            cvc:cvc,
            amount:amount
            
        }

        console.log(id);
        axios.put(`http://localhost:8065/api/payment/edit/${id}`, data)
            .then(res => {
                alert("approved");
           
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
        function getPaymentList() {
            axios.get("http://localhost:8065/api/payment/getall").then((res) => {
                console.log(res.data.data);
                console.log("res.data");
                setPaymentList(res.data.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getPaymentList();
    }, [])
   
   
    const handleClosePaymentDetailsModal = () => {
        setPaymentDetails(false);
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
    const showPaymentDetailModal = (payment) => {

        setPaymentDetails(payment);
        //setProductDetailModal(true);
      

    }
    const UpdateDetailModal = (payment) => {

        setupdateDetails(payment);
        //setProductDetailModal(true);
        

    }
    const DeleteDetailModal = (payment) => {

        setDeleteDetails(payment);
        //setProductDetailModal(true);
     

    }
    const SearchDetailModal = (payment) => {

        setSearchDetails(payment);
        //setProductDetailModal(true);
      

    }
    const renderPaymentDetailsModal = () => {

        if (!paymentDetailModal) {
            return null;
        }
        console.log('nnn');

        
       return (
            <Modal
                show={paymentDetailModal}
                handleClose={handleClosePaymentDetailsModal}
                modalTitle={'Payment Details'}
                size="lg"

            >
                <Row>
                <Col md="6">
                        <label className="key">Name:</label>
                        <p className="key">{paymentDetailModal.name}</p>
                    </Col> 
                    <Col md="6">
                        <label className="key">Email:</label>
                        <p className="key">{paymentDetailModal.email}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Card No:</label>
                        <p className="key">{paymentDetailModal.cardnumber}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Date:</label>
                        <p className="key">{paymentDetailModal.date}</p>
                    </Col>
                  
                </Row>
                <Row>
                <Col md="6">
                        <label className="key">CVC</label>
                        <p className="key">{paymentDetailModal.cvc}</p>
                    </Col>
                   
                    <Col md="6">
                        <label className="key">Amount</label>
                        <p className="key">{paymentDetailModal.amount}</p>
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
                        <label className="key">Name:</label>
                        <p className="key">{deleteDetailModal.name}</p>
                    </Col> 
                    <Col md="6">
                        <label className="key">Email:</label>
                        <p className="key">{deleteDetailModal.email}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Card No:</label>
                        <p className="key">{deleteDetailModal.cardnumber}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Date:</label>
                        <p className="key">{deleteDetailModal.date}</p>
                    </Col>
                  
                </Row>
                <Row>
                <Col md="6">
                        <label className="key">CVC</label>
                        <p className="key">{deleteDetailModal.cvc}</p>
                    </Col>
                   
                    <Col md="6">
                        <label className="key">Amount</label>
                        <p className="key">{deleteDetailModal.amount}</p>
                    </Col>
                   
                </Row>
                
                <Row>
                    <Col md="6">
                        <button className="userListDel" onClick={e =>
                            axios.delete(`http://localhost:8065/api/payment/del/${deleteDetailModal._id}`)
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
                modalTitle={'Update Payment Details'}
                size="lg"

            >
                <Row>
                <Input
                        label="Name"
                        value={name}
                        placeholder={updateDetailModal.name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        label="Email"
                        value={email}
                        placeholder={updateDetailModal.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                
                <Input
                        label="Date"
                        value={date}
                        placeholder={updateDetailModal.date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <Input
                        label="Card No"
                        value={cardnumber}
                        placeholder={updateDetailModal.cardnumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                  
                    <Input
                        label="CVC"
                        value={cvc}
                        placeholder={updateDetailModal.cvc}
                        onChange={(e) => setCvc(e.target.value)}
                    />
                    <Input
                        label="Amount"
                        value={amount}
                        placeholder={updateDetailModal.amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                  
                    <Col md="6">
                        {/* <button className="userListDel"
                        >Delete</button> */}
                        <button className="userListEdit4" onClick={e => submitPaymentForm(updateDetailModal._id)
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
                        label="Name"
                        value={name}
                        placeholder={searchresult.name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        label="Email"
                        value={email}
                        placeholder={searchresult.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                
                <Input
                        label="Date"
                        value={date}
                        placeholder={searchresult.date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <Input
                        label="Card No"
                        value={cardnumber}
                        placeholder={searchresult.cardnumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                  
                    <Input
                        label="CVC"
                        value={cvc}
                        placeholder={searchresult.cvc}
                        onChange={(e) => setCvc(e.target.value)}
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Card No</th>
                        <th>Date</th>
                        <th>cvc</th>
                        <th>Amount</th>
                       
                        <th>Action</th>
                        

                    </tr>
                    {/*  */}
                </thead>
                <tbody>{PaymentList.map((PaymentList, index) => (
                            <tr >
                                
                                <td onClick={() => showPaymentDetailModal(PaymentList)}
                            key={PaymentList._id}>{PaymentList.name}</td>
                                <td>{PaymentList.email}</td>
                                <td>{PaymentList.cardnumber}</td>
                                <td>{PaymentList.date}</td>
                                <td>{PaymentList.cvc}</td>
                                <td>{PaymentList.amount}</td>
                              
                                <td>
                                        {/* <DeleteOutline
                                      className="productListDelete"
                                      // onClick={() => handleDelete(params.row.id)}
                                    /> */}

                                        <button className="userListDel" onClick={() => DeleteDetailModal(PaymentList)}
                                        >Delete</button>


                                        <button className="userListEdit3" onClick={() => UpdateDetailModal(PaymentList)}>Edit</button> 
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
           
            {renderPaymentDetailsModal()} 
            {renderUpdateDetailsModal()}
            {renderDeleteDetailsModal()}
            {renderSearchDetailsModal()}
            

        </Layout>
    )
}

export default PaymentList