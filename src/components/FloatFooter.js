import React from 'react'
import {Container, Row, Col} from 'reactstrap';

function FloatFooter() {
	return (
		<div>
			<Container fluid>
        <div className='floatfooter'>
        <Row>
          <Col xs={12} md={3} >
            <div>
              <ul>
                <p>
                  <strong>Product</strong>
                </p>
                <li>API Documentation</li>
                <li>System Status</li>
                <li>What's new</li>
                <li>Download the iOS app</li>
                <li>Download android app</li>
              </ul>
            </div>
          </Col>
          <Col  xs={12} md={3}>
            <div>
              <ul>
                <p>
                  <strong>Company</strong>
                </p>
                <li>About us</li>
                <li>We're hiring</li>
                <li>Blog</li>
                <li>Agency Founders</li>
              </ul>
            </div>
          </Col>
          <Col  xs={12} md={3} >
            <div>
              <ul>
                <p>
                  <strong>Resources</strong>
                </p>
                <li>Help Center</li>
                <li>Contact us</li>
                <li>Quick Start Guide</li>
                <li>Book a demo</li>
                <li>Security and Privacy</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={3} >
            <div>
              <ul>
                <p>
                  <strong>Legal</strong>
                </p>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Data Processing Agreement</li>
                <li>Responsible Disclosure Policy</li>
              </ul>
            </div>
          </Col>
          <Col  xs={12} md={3} >
            <div>
              <ul>
                <p>Float 2021. All rights reserved</p>
              </ul>
            </div>
          </Col>
        </Row>
        </div>
      </Container>
		</div>
	)
}

export default FloatFooter;
