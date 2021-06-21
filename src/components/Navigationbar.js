import React from 'react';
import './Navigationbar.scss';
import {Navbar,Nav, Button} from 'react-bootstrap';

function Navigationbar() {

	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="primary" variant="primary">
        <Navbar.Brand  href="#home">Discord</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <div className="d-flex justify-content-center">
            <Nav.Link href="#downlod">Downlod</Nav.Link>
            <Nav.Link href="#nitro">Nitro</Nav.Link>
            <Nav.Link href="#saftey">Saftey</Nav.Link>
            <Nav.Link href="#support">support</Nav.Link>
            </div>
          </Nav>
          <Nav>
            <Button variant="light">
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
		</div>
	)
}

export default Navigationbar;
