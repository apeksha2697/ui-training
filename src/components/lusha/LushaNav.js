import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from './images/logo.svg';
import './LushaNav.scss';

function LushaNav() {
	return (
		<div>
      <div id='lushanav' >
      <Navbar collapseOnSelect expand="lg" fixed="top" >
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
            <Link to='/float'>Float</Link>
          </div>
        </Nav>
        <Nav> 
          <Nav.Link href="#downlod">Log In</Nav.Link>
          <label style={{border: "1px solid black", padding: "10px", background: "white", borderRadius: "10px", color:"grey", height: "50px"}}>Enter your Work Email<button type="button" className="btn btn-primary btn-sm" style={{marginLeft: "10px", backgroundColor: "#f80066", borderColor: "#f80066" }}>Start for free</button></label>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
	</div>
	)
}

export default LushaNav;
