import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { signout } from '../../actions';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './header.css';

const Header = (props) => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
      <Container fluid>

        <Link to="/" className="navbar-brand">XPress</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">


          </Nav>
         

        </Navbar.Collapse>
      </Container>

    </Navbar>
  )
}

export default Header