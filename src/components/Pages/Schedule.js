import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Form, FormControl, Navbar, Nav, Button} from 'react-bootstrap'
import { faBell, faQuestionCircle, faPlus, faGripLines, faExpandAlt} from '@fortawesome/free-solid-svg-icons';
import './Schedule.scss';
import {Row, Col} from 'reactstrap';

function Schedule() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="primary">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-dark">Search</Button>
        </Form>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#schedule">Schedule</Nav.Link>
            <Nav.Link href="#logtime">Log Time</Nav.Link>
            <Nav.Link href="#people">People</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#reports">Reports</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faQuestionCircle} />
            </Nav.Link>
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faBell} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Row>
          <Col md={3} xs={3}>
            <div>
              <p>People</p>
              <p id="plus">
                <FontAwesomeIcon  icon={faPlus} />
              </p>
              <p id="fagripline">
                <FontAwesomeIcon icon={faGripLines} />
              </p>
              <p id="faexpand">
                <FontAwesomeIcon icon={faExpandAlt} />
              </p>
              <div  id='name-panel'>
                <Button >A</Button>
                Apeksha Singh
              </div>
            </div>
            
          </Col>
          <Col md={9} xs={9}>
            <Col md={7} xs={7} >
              {/* <div className='month'>
                month
              </div>
              <div className='month'>
              month
              </div>
              <div className='month'>
              month
              </div> */}
            </Col>
          </Col>
        </Row>
    </div>
  )
}

export default Schedule;
