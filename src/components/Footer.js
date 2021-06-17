import React from 'react';
import './Footer.scss';
import { Row, Col} from 'reactstrap';
import { Button} from 'react-bootstrap';

function Footer() {
  return (
    <div>
      <footer className="footer">
          <Row>
            <Col md={4}>
              <h2>Imagine A Place</h2>
            </Col>
            <Col md={2}>
              <ul>
                <p>Product</p>
                <li>Dowload</li>
                <li>Nitro</li>
                <li>Status</li>
              </ul>
            </Col>
            <Col md={2}>
              <ul>
                <p>Resources</p>
                <li>ABout</li>
                <li>Jobs</li>
                <li>Branding</li>
                <li>NewsRoom</li>
              </ul>
            </Col>
            <Col md={2}>
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
            <Col md={2}>
              <ul>
                <p>Policies</p>
                <li>Terms</li>
                <li>Policy</li>
                <li>Guidelines</li>
                <li>Acknowledgement</li>
              </ul>
            </Col>
          </Row>
          <Col md={12}>
            <p>Discord</p>
            <Button variant="light">
              Logout
            </Button>
          </Col>
      </footer>
    </div>
  )
}

export default Footer;
