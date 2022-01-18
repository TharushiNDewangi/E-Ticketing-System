
import React, { useState ,useEffect} from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col, Table } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import Modal from '../../components/UI/Modal';
import axios from "axios";
import './style.css';
//create products function
const ViewRoutes = (props) => {
    
    const [papers, setPapers] = useState([]);

    const [searchresult, setSearchresult] = useState(null);
    const [paperDetailModal, setProductDetails] = useState(null);
    const [updateDetailModal, setupdateDetails] = useState(null);
    const [deleteDetailModal, setDeleteDetails] = useState(null);
    const [searchDetailModal, setSearchDetails] = useState(null);

    //const[routeId,setrouteId] = useState("");
    const [startingPoint,setstartingPoint] = useState("");
    const[endingPoint,setendingPoint] = useState("");
    const [totalkm, settotalkm] = useState();
    const[chargersPerKm,setchargersPerKm] = useState();
    const [maxCreditLimit, setmaxCreditLimit] = useState();
    const [searchid, setSearchid] = useState("");
    
    //const [paperDetailModal, setProductDetails] = useState(null);
  
    useEffect(() => {
        function getPapers() {
              axios.get( 
                'http://localhost:8065/api/route/viewall'
              ).then((res) => {
                setPapers(res.data.data);
                console.log("res.data");
                console.log(res.data.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getPapers();
    }, []);
    console.log("ff")
   console.log("p"+papers)

   const submitProductForm = (id) => {
    let data = {
        startingPoint: startingPoint,
        endingPoint: endingPoint,
        totalkm: totalkm,
        chargersPerKm: chargersPerKm,
        maxCreditLimit:maxCreditLimit
    }

    console.log(id);
    axios.put(`http://localhost:8065/api/route/edit/${id}`, data)
        .then(res => {
            alert("edited");
            console.log(data);
            console.log('added');
        })
    //dispatch(addProduct(form)).then(() => setShow(false));
};

const Searchresult = (id) => {
    let data = {
        routeId: id,
    }

    console.log("id :");
    console.log(data);
    axios.post(`http://localhost:8065/api/route/sech`, data)
        .then(res => {
            console.log(res.data.data);
            setSearchresult(res.data.data)
            console.log('added');
            console.log(res.data);
        })
    //dispatch(addProduct(form)).then(() => setShow(false));
};
const handleCloseProductDetailsModal = () => {
    setProductDetails(false);
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
 const showProductDetailModal = (product) => {

    setProductDetails(product);
    //setProductDetailModal(true);
    console.log('dewww' + product);

}
const UpdateDetailModal = (product) => {

    setupdateDetails(product);
    //setProductDetailModal(true);
    console.log('nnn' + product);

}
const DeleteDetailModal = (product) => {

    setDeleteDetails(product);
    //setProductDetailModal(true);
    console.log('nnn' + product);

}
const SearchDetailModal = (product) => {

    setSearchDetails(product);
    //setProductDetailModal(true);
    console.log('nnn' + product);

}

const renderProductDetailsModal = () => {

        if (!paperDetailModal) {
            return null;
        }
        console.log('nnn');

        
        return (
            <Modal
                show={paperDetailModal}
                handleClose={handleCloseProductDetailsModal}
                modalTitle={'Route details'}
                size="lg"

            >
                <Row>
                    <Col md="6">
                        <label className="key">routeId</label>
                        <p className="key">{paperDetailModal.routeId}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">startingPoint</label>
                        <p className="key">{paperDetailModal.startingPoint}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">endingPoint</label>
                        <p className="key">{paperDetailModal.endingPoint}</p>
                    </Col>
                    
                </Row>
           
                <Row>
                    <Col md="12">
                        <label className="key"> totalkm</label>
                        <p className="key">{paperDetailModal.totalkm}</p>
                    </Col>
                    <Col md="12">
                        <label className="key"> chargersPerKm</label>
                        <p className="key">{paperDetailModal.chargersPerKm}</p>
                    </Col>
                    <Col md="12">
                        <label className="key"> maxCreditLimit</label>
                        <p className="key">{paperDetailModal.maxCreditLimit}</p>
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
                modalTitle={'Delete Routes'}
                size="lg"

            >
                <Row>
                    <Col md="6">
                        <label className="key">routeId</label>
                        <p className="key">{deleteDetailModal.routeId}</p>
                    </Col>
                   
                    <Col md="6">
                        <label className="key">startingPoint</label>
                        <p className="key">{deleteDetailModal.startingPoint}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">endingPoint</label>
                        <p className="key">{deleteDetailModal.endingPoint}</p>
                    </Col>
                    
                
                    <Col md="12">
                        <label className="key"> totalkm</label>
                        <p className="key">{deleteDetailModal.totalkm}</p>
                    </Col>
                   </Row><Row>
                    <Col md="12">
                        <label className="key"> chargersPerKm</label>
                        <p className="key">{deleteDetailModal.chargersPerKm}</p>
                    </Col>
                    <Col md="12">
                        <label className="key"> maxCreditLimit</label>
                        <p className="key">{deleteDetailModal.maxCreditLimit}</p>
                    </Col>

                </Row>
                <Row>
                    <Col md="6">
                        <button className="userListDel" onClick={e =>
                            axios.delete(`http://localhost:8065/api/route/del/${deleteDetailModal._id}`)
                                .then(res => {
                                    alert("Deleted");
                                    console.log('added');
                                })}>Delete</button>

                        <button className="userListEdit" >Cancel</button>


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
                modalTitle={'Update Routes'}
                size="lg"

            >
      
                <Row>
                    <Input
                        label="startingPoint"
                        value={startingPoint}
                        placeholder={updateDetailModal.startingPoint}
                        onChange={(e) => setstartingPoint(e.target.value)}
                    />
                   
                    <Input
                        label="endingPoint"
                        value={endingPoint}
                        placeholder={updateDetailModal.endingPoint}
                        onChange={(e) => setendingPoint(e.target.value)}
                    />
                  
                    <Input
                        label="totalkm"
                        value={totalkm}
                        placeholder={updateDetailModal.totalkm}
                        onChange={(e) => settotalkm(e.target.value)}
                    />
                  
                    <Input
                        label="chargersPerKm"
                        value={chargersPerKm}
                        placeholder={updateDetailModal.chargersPerKm}
                        onChange={(e) => setchargersPerKm(e.target.value)}
                    />
                     <Input
                        label="maxCreditLimit"
                        value={maxCreditLimit}
                        placeholder={updateDetailModal.maxCreditLimit}
                        onChange={(e) => setmaxCreditLimit(e.target.value)}
                    />
                    </Row><Row>
                    <Col md="6">
                        <button className="userListDel" handleClose={handleCloseUpdateDetailsModal}
                        >Cancel</button>
                        <button className="userListEdit" onClick={e => submitProductForm(updateDetailModal._id)
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
                        label="startingPoint"
                        value={startingPoint}
                        placeholder={searchresult.startingPoint}
                        onChange={(e) => setstartingPoint(e.target.value)}
                    />
                   
                    <Input
                        label="endingPoint"
                        value={endingPoint}
                        placeholder={searchresult.endingPoint}
                        onChange={(e) => setendingPoint(e.target.value)}
                    />
                  
                    <Input
                        label="totalkm"
                        value={totalkm}
                        placeholder={searchresult.totalkm}
                        onChange={(e) => settotalkm(e.target.value)}
                    />
                  
                    <Input
                        label="chargersPerKm"
                        value={chargersPerKm}
                        placeholder={searchresult.chargersPerKm}
                        onChange={(e) => setchargersPerKm(e.target.value)}
                    />
                    </Row><Row>
                    <Col md="6">
                        <button className="userListDel"
                        >Delete</button>
                        <button className="userListEdit"
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
                           
                            <dv>
                                <input
                                    type="text"
                                    id="header-search"
                                    placeholder="Search Route id"
                                    name="s"
                                    onChange={(e) => setSearchid(e.target.value)}
                                />
                                <button className="userListSearch" type="submit" onClick={() => Searchresult(searchid)}>Search</button>
                            </dv>


                        </div>
                        <div>
                            <h3>Routes</h3>
                            <Table style={{ fontsize: 12 }} responsive="sm">
                <thead>
                    <tr >
                        
                        <th>Route Id</th>
                        <th>Starting Point</th>
                        <th>Ending Point</th>
                        <th>Total km</th>
                        <th>Chargers PerKm</th>
                        <th>Max Credit Limit</th>
                        <th>Action</th>
                       
                        

                    </tr>
                </thead>
                <tbody>{papers.map((papers, index) => (
                            <tr >
                                
                                <td onClick={() => showProductDetailModal(papers)}
                            key={papers._id}>{papers.routeId}</td>
                                <td>{papers.startingPoint}</td>
                                <td>{papers.endingPoint}</td>
                                <td>{papers.totalkm}</td>
                                <td>{papers.chargersPerKm}</td>
                                <td>{papers.maxCreditLimit}</td>
                                <td>
                                <button className="userListDel" onClick={() => DeleteDetailModal(papers)}>Delete</button>
                                <button className="userListEdit" onClick={() => UpdateDetailModal(papers)}>Edit</button>
                                </td>

                            </tr>))}
                </tbody>
            </Table>
                           
                        </div>

                    </Col>
                </Row>
            </Container>
            {renderProductDetailsModal()}
            {renderUpdateDetailsModal()}
            {renderDeleteDetailsModal()}
            {renderSearchDetailsModal()}
            

        </Layout>
    )
}

export default ViewRoutes