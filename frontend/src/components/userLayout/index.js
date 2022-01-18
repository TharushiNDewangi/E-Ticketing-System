import React from 'react';
import UserHeader from '../UserHeader';
import { Container,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './style.css';
//part13
const UserLayout = (props) => {
  return (
    <>
      <UserHeader />
      {
        props.sidebar ?

          <Container fluid>
            <Row>
              <Col md={2} className="sidebar">
                <ul>
                  <li><NavLink exact to={'/'}>Home</NavLink></li>
                  <li><NavLink to={'/addroute'}>Add Route  </NavLink></li>
                  <li><NavLink to={'/viewroute'}>View Route  </NavLink></li>
                  <li><NavLink to={'/addbus'}>Add Bus  </NavLink></li>
                  <li><NavLink to={'/viewbuses'}>View Buses  </NavLink></li>
                  <li><NavLink to={'/bookingList'}>Booking List  </NavLink></li>
                  <li><NavLink to={'/payment'}>Payments  </NavLink></li>
{/*                   
                  <li><NavLink to={'/adminreseach'}>Bus Management</NavLink></li> */}
                  {/* <li><NavLink to={'/adminworkshop'}></NavLink></li> */}
                </ul>
              </Col>
              <Col md={10} style={{ marginLeft: 'auto' ,paddingTop:'60px'  }}>
              {props.children}
                </Col>
            </Row>
          </Container>
          :
          props.children
        }
    

    </>
  )
}

export default UserLayout;