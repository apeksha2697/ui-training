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
import image9 from './images/gift_v2.svg';
import image10 from './images/gift_v2-1.svg';
import image11 from './images/gift_v2-2.svg';
import image12 from './images/gift_v2-3.svg';
import image13 from './images/glasses.svg';


function LushaHome() {
  return (
    <div>
      <div className='main-page' id="main-part" >
        <Row>
          <Col md={3} xs={12}>
            <img className='image' id='image1' src={image1} alt='' />
          </Col>
          <Col md={6} xs={12} >
            <Col md={12} xs={12}>
              <h1>Reach your ideal future customers.</h1>
              <p>The top sales teams use Lusha to locate accurate B2B contact and company details, 
              shorten their sales discovery and close more deals.Signup field for the lusha app - 
              please enter your work email</p>
              <label style={{border: "1px solid black", padding: "10px", background: "white", borderRadius: "10px", color:"grey", height: "50px"}}>Enter your Work Email<button type="button" className="btn btn-primary btn-sm" style={{marginLeft: "10px", backgroundColor: "#f80066", borderColor: "#f80066" }}>Start for free</button></label>
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
        <Container>
          <Row id='sale'>
            <Col md={12} sm={12} xs={12} >
              <h2>Here’s why over 600,000 sales <br /> pros love Lusha</h2>
            </Col>
          </Row>
          <Row id='block'>
            <Col md={3} sm={12} xs={12}>
              <img src={image9} alt='' />
              <h5 className='head'>
              Get free<br/>contacts for life
              </h5>
              <p>We give you 5 free contacts every month</p>
            </Col>
            <Col md={3} sm={12} xs={12}>
            <img src={image10} alt='' />
            <h5 className='head'>
            Reach 100M+<br/>prospects directly
            </h5>
            <p>During COVID-19 the phone is the best way to reach your prospects</p>
            </Col>
            <Col md={3} sm={12} xs={12}>
            <img src={image11} alt='' />
            <h5 className='head'>
            The highest<br/>accuracy rate
            </h5>
            <p>Lusha’s accuracy is the higest in the industry - with 81% accurate phone numbers & emails</p>
            </Col>
            <Col md={3} sm={12} xs={12}>
            <img src={image12} alt='' />
            <h5 className='head'>
            GDPR and<br/>CCPA aligned
            </h5>
            <p>We’re 27001 ISO certified, CCPA and GDPR aligned</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row id='discover'>
            <Col md={12} xs={12} sm={12}>
              <h2>Discover more</h2>
            </Col>
          </Row>
          <Row id='video'>
            <Col md={3} xs={12} sm={12}>
              <h4>Lusha Prospecting Platform</h4>
              <p>Convert more prospects into customers with laser-targeted search and list building.</p>
            </Col>
            <Col md={9} xs={12} sm={12}>
                <video className='video1'>
                  <source src='https://mk0lusharbrlcx28627.kinstacdn.com/wp-content/uploads/2021/06/Prospecting_new.webm' type="video/webm" />
                </video>
            </Col>
          </Row>
          <Row id='accurate'>
            <Col md={12} xs={12} sm={12}>
              <img className='glasses' src={image13} alt=''/>
            </Col>
            <Col md={12} xs={12} sm={12}>
              <h2>The most accurate datayou’ll ever find</h2>
            </Col>
          </Row>
          <Row>
            <Container className='lushacount' style={{position:"relative"}}>
              <div style={{width: "80%", height: "100%", backgroundColor: "rgb(248, 0, 102)", position: "absolute", zIndex: "0", bottom: "-16px", left: "-12px", borderRadius: "10px", border: "2px solid black"}}></div>
              <div className="row justify-content-center" id="lushacountmain" style={{position: "relative", visibility: "visible", display: "flex", flexWrap: "wrap", justifyContent: "space-between", height: "100%", backgroundColor: "white", border: "2px solid black", borderRadius: "10px", minHeight: "200px"}} >
              <div className="lushaCount col-lg-3 col-md-6 col-xs-6 col-sm-6"><p className="a" style={{fontSize: "clamp(30px,4vw,40px)"}}>100M</p><p className="b" >Business Profiles</p></div>
              <div className="lushaCount col-lg-3 col-md-6 col-xs-6 col-sm-6"><p className="a" style={{fontSize: "clamp(30px,4vw,40px)"}}>60M</p><p className="b">Email Addresses</p></div>
              <div className="lushaCount col-lg-3 col-md-6 col-xs-6 col-sm-6"><p className="a" style={{fontSize: "clamp(30px,4vw,40px)"}}>50M</p><p className="b">Direct Dials</p></div>
              <div className="lushaCount col-lg-3 col-md-6 col-xs-6 col-sm-6"><p className="a" style={{fontSize: "clamp(30px,4vw,40px)"}}>15M</p><p className="b">Company Profiles</p></div>
              </div>
            </Container>
          </Row>
          <Row style={{position: "relative", display: "flex", justifyContent: "center"}}>
            <h2 style={{fontSize: '60px'}}>Always hit your numbers</h2>
          </Row>
          <Row>
          <div className="row justify-content-center" style={{padding: "10px 25px"}}>
            <div className="col-md-4 flex-row justify-content-center px-lg-7 px-md-4 px-5 text-center text-lg-left mb-10 mb-md-0">
              <img src="https://mk0lusharbrlcx28627.kinstacdn.com/wp-content/uploads/2021/04/team.svg" alt="" height="48" width="48"/>
              <h5 className=" mt-2">Team <br className="d-none d-md-inline d-lg-none" /> management</h5> Admins can easily allocate credits and limit credit usage between team members.
              </div>
            <div className="col-md-4 flex-row justify-content-center px-lg-7 px-md-4 px-5 text-center text-lg-left mb-10 mb-md-0"> 
              <img src="https://mk0lusharbrlcx28627.kinstacdn.com/wp-content/uploads/2021/04/arrow.svg" alt="" height="48" width="48"/><h5 className=" mt-2">Bulk enrich your<br className="d-none d-md-inline d-lg-none"/> lists in one click</h5> Instantly build and enrich contact lists and save them in bulk to Lusha or your CRM.</div>
            <div className="col-md-4 flex-row justify-content-center px-lg-7 px-md-4 px-5 text-center text-lg-left mb-10 mb-md-0"> <img src="https://mk0lusharbrlcx28627.kinstacdn.com/wp-content/uploads/2021/04/monitor.svg" alt="" height="48" width="48"/><h5 className=" mt-2">Prospect<br className="d-none d-md-inline d-lg-none"/> across the web</h5> Find prospects on LinkedIn, Gmail and any B2B site.</div></div>
          </Row>
          <Row>
          <div className="integration container-fluid pb-8 pb-md-15 pb-lg-0" style={{height: "100vh"}}>
            <div className="lush_container__NtrLo" style={{height: "100%"}}>
              <div className="row justify-content-md-center justify-content-lg-between  align-items-center pt-5 pb-4 pt-md-0 pb-md-0 py-md-7 py-lg-0" style={{height: "100%", marginTop: "10px"}}>
                <div className="col-12 col-md-10 col-lg-6 left mb-2 mb-md-4 align-self-center"><div className="text-center text-lg-center mb-6 mb-lg-0"><h1 className="mb-3" style={{fontSize: "clamp(35px, 5vw, 45px)", fontWeight: "900"}}>Lusha integrates<br className="d-lg-none"/> with the leading CRMs</h1><p className="mb-4">Save time and avoid manual entry<br className="d-none d-md-inline d-lg-none"/> errors with Lusha’s CRM integrations.</p>
                  <button className="btn btn primary">Learn more</button>
                </div>
              </div>
            <div className="text-center col-12 col-lg-6 left" style={{padding: "0px", height: "100%"}}>
              <div className="wow-one animated show" style={{position: "relative", minHeight: "380px", marginLeft: "50px", marginTop: "10px"}}>
                <img src="https://mk0lusharbrlcx28627.kinstacdn.com/wp-content/uploads/2021/02/integrations_shadow.svg" alt="" height="332" width="90%" style={{position: "absolute", zIndex: "0", left: "-10px", bottom: "-10px", width: "80%", height: "80%"}}/>
                  <img src="https://mk0lusharbrlcx28627.kinstacdn.com/wp-content/uploads/2021/02/integrations.svg" alt="" height="332" width="90%" style={{position: "absolute", zIndex: "1", left: "0px", bottom: "0px", width: "80%", height: "80%"}}/>
                </div></div></div></div></div>
          </Row>
          <Row>
          <section className="lush_container"><div className="row  pt-4 pt-lg-7" style={{margin: "300px 0px 0px"}}><div className="col-12 col-md-5 col-lg-4 bg-cream  text-center text-md-left d-md-flex justify-content-md-end justify-content-lg-end justify-content-sm-center justify-content-xs-center"><img width="90%" height="335px" src="https://mk0lusharbrlcx28627.kinstacdn.com/wp-content/uploads/2021/02/eric_gong_magenta.png" alt="" sizes="(max-width: 20px) 100vw, 220px" data-ll-status="loaded"/></div><div className="col-12 col-md-7 col-lg-8 px-lg-6 bg-cream  text-lg-left text-md-left"><div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%"}}><p className="testimonial__p mb-5" style={{fontSize: "clamp(25px, 4vw, 35px)", fontWeight: "600"}}>I couldn’t honestly imagine working without Lusha. <b>Game changer</b>.</p><div className="testimonial__details d-flex justify-content-md-start justify-content-center"><img width="56" height="56" src="https://mk0lusharbrlcx28627.kinstacdn.com/wp-content/uploads/2021/04/gong-testi.png" alt="" sizes="(max-width: 56px) 100vw, 56px" data-ll-status="loaded"/><p className="text--sb m-0 pt-1"> Eric Lindroos <span className="text-tiny text-grey">Recruiter, Gong</span></p></div></div></div></div></section>
          </Row>
          <Row>
            <section className="g2 container-fluid mb-10 mb-lg-0 mt-md-4 mt-lg-0"><div className="row pt-4 pt-sm-7 pb-5 pb-sm-9 pt-lg-0 pb-lg-0 py-lg-15 mb-lg-9 mt-lg-8"><div className="container"><div className="row align-items-center justify-content-center justify-content-lg-end"><div className="col-md-9 col-lg-5 text-center text-lg-left mb-12 mb-sm-7 mb-lg-0"><h3 className="g2__title">Our customers<br className="d-md-none"/> love us.<br className="d-none d-md-inline"/> We’ve gotten<br className="d-md-none"/> top marks on G2!</h3></div><div className="col-lg-6 text-center text-lg-right px-6 px-md-3"><div className="g2__image-wrap wow-one animated show" style={{visibility: "visible"}}> <img width="90%" height="178" src="https://mk0lusharbrlcx28627.kinstacdn.com/wp-content/uploads/2021/04/g2_cup.png" className="attachment-full size-full lazyloaded" alt="" sizes="(max-width: 434px) 100vw, 434px" srcSet="https://mk0lusharbrlcx28627.kinstacdn.com/wp-content/uploads/2021/04/g2_cup.png 434w, https://mk0lusharbrlcx28627.kinstacdn.com/wp-content/uploads/2021/04/g2_cup-300x123.png 300w, https://mk0lusharbrlcx28627.kinstacdn.com/wp-content/uploads/2021/04/g2_cup-176x72.png 176w, https://mk0lusharbrlcx28627.kinstacdn.com/wp-content/uploads/2021/04/g2_cup-36x15.png 36w, https://mk0lusharbrlcx28627.kinstacdn.com/wp-content/uploads/2021/04/g2_cup-48x20.png 48w" data-ll-status="loaded"/><noscript><img width="434" height="178" src="https://mk0lusharbrlcx28627.kinstacdn.com/wp-content/uploads/2021/04/g2_cup.png" class="attachment-full size-full" alt="" srcSet="https://mk0lusharbrlcx28627.kinstacdn.com/wp-content/uploads/2021/04/g2_cup.png 434w, https://mk0lusharbrlcx28627.kinstacdn.com/wp-content/uploads/2021/04/g2_cup-300x123.png 300w, https://mk0lusharbrlcx28627.kinstacdn.com/wp-content/uploads/2021/04/g2_cup-176x72.png 176w, https://mk0lusharbrlcx28627.kinstacdn.com/wp-content/uploads/2021/04/g2_cup-36x15.png 36w, https://mk0lusharbrlcx28627.kinstacdn.com/wp-content/uploads/2021/04/g2_cup-48x20.png 48w" sizes="(max-width: 434px) 100vw, 434px" /></noscript></div></div></div></div></div></section>
          </Row>
        </Container>
        <Row id="above" style={{backgroundColor: "#600DFF"}}>
          <Col md={12} sm={12} xs={12} lg={12}  >
              <h2>Get Started with Lusha</h2>
          </Col>
          <Col md={12} sm={12} xs={12} lg={12}>
          <label style={{border: "1px solid black", padding: "10px", background: "white", borderRadius: "10px", color:"grey", height: "50px"}}>Enter your Work Email<button type="button" className="btn btn-primary btn-sm" style={{marginLeft: "10px", backgroundColor: "#f80066", borderColor: "#f80066" }}>Start for free</button></label>
          </Col>
          <Col md={12} sm={12} xs={12} lg={12}>
            <p>5 free contact shows a month Instant access+121,000 companies love us GDPR & CCPA aligned Monthly & yearly contracts Cancel anytime</p>
          </Col>
          </Row>
    </div>
  )
}

export default LushaHome;
