import React from 'react';
import './Footer.scss';
import { Row, Col} from 'reactstrap';
import { Button} from 'react-bootstrap';

function Footer() {
  return (
    <div>
      <footer className="footer">
          <Row style={{borderBottom: "4px solid blue", paddingBlock: "50px"}}>
            <Col md={3} xs={{span: 7 , offset: 5}} style={{marginLeft: "40px"}}>
              <h2>Imagine A Place</h2>
            </Col>
            <Col md={2} xs={6}>
              <ul style={{color: "white"}}>
                <p>Product</p>
                <li>Dowload</li>
                <li>Nitro</li>
                <li>Status</li>
              </ul>
            </Col>
            <Col md={2} xs={6}>
              <ul>
                <p>Resources</p>
                <li>ABout</li>
                <li>Jobs</li>
                <li>Branding</li>
                <li>NewsRoom</li>
              </ul>
            </Col>
            <Col md={2} xs={6}>
              <ul>
                <p>Company</p>
                <li>College</li>
                <li>Support</li>
                <li>Saftey</li>
                <li>Blog</li>
                <li>Feedback</li>
                <li>Developer</li>
                <li>Streamkit</li>
              </ul>
            </Col>
            <Col md={2} xs={6}>
              <ul>
                <p>Policies</p>
                <li>Terms</li>
                <li>Policy</li>
                <li>Guidelines</li>
                <li>Acknowledgement</li>
              </ul>
            </Col>
          </Row>
          <Row style={{paddingBlock: "50px"}}>
          <Col>
            <p className="d-inline p-2 text-white">Discord</p>
            <p className="float-right" >
            <Button className="d-inline p-2 m-1 float-right" variant="light">
              Logout
            </Button>
            </p>
          </Col>
          </Row>
      </footer>
    </div>
  )
}

export default Footer;
