import React from 'react'
import {Navbar,Nav, FormControl, Form} from 'react-bootstrap';
import logo from './images/logo.svg';
import './LushaNav.scss';

function LushaNav() {
	return (
		<div>
      <div id='lushanav' >
      <Navbar collapseOnSelect expand="lg" sticky="top" >
        <Navbar.Brand  href="#home">
          <img src={logo} alt='' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <div className="d-flex justify-content-center">
            <Nav.Link href="#downlod">Why Lusha?</Nav.Link>
            <Nav.Link href="#nitro">Customers</Nav.Link>
            <Nav.Link href="#saftey">Pricing</Nav.Link>
            <Nav.Link href="#support">Company</Nav.Link>
          </div>
        </Nav>
        <Nav> 
          <Nav.Link href="#downlod">Log In</Nav.Link>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
	</div>
	)
}

export default LushaNav;
