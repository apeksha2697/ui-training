import React from 'react'
import {Navbar,Nav, Button} from 'react-bootstrap';
import './FloatFooter.scss';
import float from './images/float.png';

function FloatNav() {
  return (
    <div>
      <div className='bar'>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed='top' >
          <Navbar.Brand  href="#home">
            <img src={float} alt='' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <div className="d-flex justify-content-center">
              <Nav.Link href="#downlod">How it works</Nav.Link>
              <Nav.Link href="#nitro">Who uses Float?</Nav.Link>
              <Nav.Link href="#saftey">Integrations</Nav.Link>
              <Nav.Link href="#support">Pricing</Nav.Link>
              </div>
            </Nav>
            <Nav> 
              <Nav.Link href="#downlod">Log In</Nav.Link>
              <Button variant="primary">
                Try for free
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default FloatNav;
