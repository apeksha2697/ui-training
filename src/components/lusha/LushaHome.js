import React from 'react'
import {Container, Row, Col} from 'reactstrap';
import './LushaHome.scss';
import image1 from './images/AlbertTorres-1.png';
import image2 from './images/lusha-fill.png';
import image3 from './images/google_logo.svg';
import image4 from './images/dropbox_logo.svg';
import image5 from './images/uber_icon.svg';
import image6 from './images/microsoft_logo.svg';
import image7 from './images/zendesk.svg';
import image8 from './images/chrome.svg';


function LushaHome() {
  return (
    <div>
      <div className='main-page' id="main-part" >
        <Row>
          <Col md={3} xs={12}>
            <img className='image' id='image1' src={image1} alt='' />
          </Col>
          <Col md={6} xs={12} >
            <Col md={12} xs={12} >
              <h1>Reach your ideal future customers.</h1>
              <p>The top sales teams use Lusha to locate accurate B2B contact and company details, 
              shorten their sales discovery and close more deals.Signup field for the lusha app - 
              please enter your work email</p>
            </Col>
          </Col>
          <Col md={3} xs={12}>
            <img className='image' id='image2' src={image2} alt='' />
          </Col>
        </Row>
        </div>
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <div className='over' >
                <p>Over 120,000 companies prefer Lusha to connect with prospects, convert more leads and increase their revenue</p>
              </div>
            </Col>
          </Row>
          <Row id='logo'>
            <Col md={3} xs={6}>
              <img id='image3' src={image3} alt='' />
            </Col>
            <Col md={2} xs={6}>
              <img src={image4} alt='' />
            </Col>
            <Col md={2} xs={6}>
              <img src={image5} alt='' />
            </Col>
            <Col md={2} xs={6}>
              <img src={image6} alt='' />
            </Col>
            <Col md={3} xs={12}>
              <img id='image7' src={image7} alt='' />
            </Col>
          </Row>
          <Row id='star'>
            <Col md={2} xs={6}>
              <p>4.7/5 ON CHROME STORE</p>
            </Col>
            <Col md={2} xs={6}>
              <img src={image8} alt='' />
            </Col>
            <Col md={2} xs={6}>
              <p>4.7/5 ON CHROME STORE</p>
            </Col>
            <Col md={2} xs={6}>
              <img src={image8} alt='' />
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default LushaHome;
