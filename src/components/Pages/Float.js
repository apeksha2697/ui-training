import React from 'react'
import {Container, Row, Col} from 'reactstrap';
import './Float.scss';
import { Button} from 'react-bootstrap';
import image1 from '../images/desktop.webp';
import capacity from '../images/capacity.png';
import project from '../images/project.png';
import resource from '../images/resource.png';
import row1 from '../images/row1.png';
import row2 from '../images/row2.png';
import row3 from '../images/row3.png';
import row4 from '../images/row4.png';
import row5 from '../images/row5.png';
import row6 from '../images/row6.png';
import list1 from '../images/list1.png';
import list2 from '../images/list2.png';
import list3 from '../images/list3.png';
import list4 from '../images/list4.png';
import small1 from '../images/small1.png';
import small2 from '../images/small2.png';
import small3 from '../images/small3.png';
import big1 from '../images/big1.png';
import big2 from '../images/big2.png';
import big3 from '../images/big3.png';
import buzz from '../images/buzz.png';
import bird from '../images/bird.png';
import download from '../images/download.png';

function Float() {
  return (
    <div>
    <Container>
      <div className='index-module' >
        <h1>The resource management platform to plan your team's best work</h1>
        <p>Plan, schedule, and track your projects in one place</p>
      </div>
      <div className='try-free'>
        <Button>Try For Free</Button>
      </div>
      <div className='center-image'>
        <img src={download} alt='' />
      </div>
      <Row>
        <Col md={12} xs={12}>
          <img className='image1' src={image1} alt='' />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row >
        <Col md={4} xs={12}>
          <div className='capacity'>
          <img src={capacity} alt='' />
          <h3>Manage your team's availability on autopilot</h3>
          <p>Schedule time off, set custom work hours, and import public holidays. Connect directly with your calendar tools.</p>
          </div>
        </Col>
        <Col md={4} xs={12}>
          <div className='project'>
          <img src={project} alt='' />
          <h3>Create project timelines and plan resources with precision</h3>
          <p>Add project phases and set milestones. Link tasks to group project dependencies and shift timelines in a click.</p>
          </div>
        </Col>
        <Col md={4} xs={12}>
          <div className='management'>
          <img src={resource} alt='' />
          <h3>Schedule tasks and make updates in real time</h3>
          <p>Schedule time off, set custom work hours, and import public holidays. Connect directly with your calendar tools.</p>
          </div>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div>
            <h2>
              TRUSTED BY TEAMS OF 5 To 5,000+
            </h2>
          </div>
        </Col>
        <Col xs={6} sm={6} md={2} lg={2} xl={2}>
          <div>
            <img src={row1} alt="" />
          </div>
        </Col>
        <Col xs={6} sm={6} md={2} lg={2} xl={2}>
          <div>
            <img src={row2} alt="" />
          </div>
        </Col>
        <Col xs={6} sm={6} md={2} lg={2} xl={2}>
          <div>
            <img src={row3} alt="" />
          </div>
        </Col>
        <Col xs={6} sm={6} md={2} lg={2} xl={2}>
          <div>
            <img src={row4} alt="" />
          </div>
        </Col>
        <Col xs={6} sm={6} md={2} lg={2} xl={2}>
          <div>
            <img src={row5} alt="" />
          </div>
        </Col>
        <Col xs={6} sm={6} md={2} lg={2} xl={2}>
          <div>
            <img src={row6} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={12} md={12} >
          <div>
            <h2>
              FOR RESOURCE MANAGEMENT, ACROSS ALL INDUSTRIES
            </h2>
          </div>
        </Col>
        <Col xs={6}  md={3} >
          <div className='logocont'>
            <h3>Agencies</h3>
            <img src={list1} alt="" />
            <p >Resource forecasting</p>
            <p >Track budgets and billables</p>
            <p>Reporting and timesheets</p>
          </div>
        </Col>
        <Col xs={6}  md={3} >
          <div className='logocont'>
            <h3 >Consultancies</h3>
            <img src={list2} alt="" />
            <p>Resource planning</p>
            <p >Create project timelines</p>
            <p >Budget management</p>
          </div>
        </Col>
        <Col xs={6}  md={3} >
          <div className='logocont'>
             <h3>Architecture firms</h3>
            <img src={list3} alt="" />
            <p>Add project phases</p>
            <p>Shift timelines</p>
            <p>Budget tracking</p>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className='logocont'>
            <h3>IT services</h3>
            <img src={list4} alt="" />
            <p>Plan complex projects</p>
            <p>Visualize resource capacity</p>
            <p>Project reports</p>
          </div>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={12}md={6} >
          <div className='forecast'>
            <h3>Forecasting and Reports</h3>
            <h4>
              Compare project estimates vs actuals
            </h4>
            <p>
              Set a budget to forecast your resource capacity and
              strategically plan project work. Monitor progress in real time
              and compare your estimated hours with the actual time taken.
              Team members can log or adjust their hours in a click, with
              pre-filled timesheets.
            </p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div>
            <img className='image' src={big1} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col  xs={12} md={6}>
          <div className='direct'>
            <h3 >Direct integrations</h3>
            <h4 >
              Connect with existing workflows
            </h4>
            <div>
              <img src={small1} alt="" />
              <h2>Project management</h2>
              <p>
                Sync your favorite project management tools to start
                scheduling tasks to resources.
              </p>
            </div>
            <div>
              <img src={small2} alt="" />
              <h2>Calendar sync</h2>
              <p>
                Keep your resource schedule up to date with calendar
                integrations.
              </p>
            </div>
            <div>
              <img src={small3} alt="" />
              <h2>Slack updates</h2>
              <p >
                Send your team their work schedule and time tracking
                reminders directly in Slack.
              </p>
            </div>
          </div>
        </Col>
        <Col  xs={12} md={6}>
          <div>
            <img className='image'  src={big2} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={12} md={6} >
          <div className='mobile'>
            <h3>Mobile Apps</h3>
            <h4 >
              Schedule resources and log time, from anywhere
            </h4>
            <img src={buzz} alt="" />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div>
            <img className='image' src={big3} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={12} md={12} >
          <div className='last-head'>
            <h2>
              Make the most of your team's time
            </h2>
          </div>
        </Col>
        <Col xs={12}  md={12} >
          <div className='last-head'>
            <p >30 day trial. No credit card.</p>
          </div>
        </Col>
      </Row>
      <Row className="mt-2 justify-content-center" >
        <Col xs={4} md={4}>
          <div className='last-btn'>
            <Button>Try for free</Button>
          </div>
        </Col>
      </Row>
      <Row >
        <Col xs={12} md={12}>
          <div className='bird'>
            <img src={bird} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Float;
