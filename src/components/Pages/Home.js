import {Container, Row, Col} from 'reactstrap';
import './Home.scss';
import { Button} from 'react-bootstrap';
import image1 from '../images/image1.svg';
import image2 from '../images/image2.svg';
import image3 from '../images/image3.svg';
import image4 from '../images/image4.svg';
import Footer from '../Footer';
import Navbar from '../Navigationbar';

function Home() {
	return (
		<div>
		<Navbar />
      	<Row id='main' style={{height:' 100vh', width: 'auto', background: 'blue'}}>
			  <div className="description">
					<h2>IMAGINE A PLACE...</h2>
					<p>...where you can belong to a school club, a gaming group, or a worldwide art community. 
						Where just you and a handful of friends can spend time together. 
						A place that makes it easy to talk every day and hang out more often.</p>
          <Button style={{backgroundColor: 'white', color: 'black', borderRadius: '100px'}}>
              Download From Linux
          </Button>
          <Button style={{backgroundColor: 'black', color: 'white', borderRadius: '100px', marginLeft: '10px'}}>
            Open Discord in browser
          </Button>
        </div>
        <div className='image'>
          <img className='back' id='back' src={'https://discord.com/assets/e6d57714479874c665b36c7adee76b1d.svg' } alt=''/>
          <img className='left' id='left' src={'https://discord.com/assets/8a8375ab7908384e1fd6efe408284203.svg' } alt='' />
          <img className='right' id='right' src={'https://discord.com/assets/c40c84ca18d84633a9d86b4046a91437.svg' } alt='' />
        </div>
      </Row>
			<Container>
				<Row >
					<Col md={8}>
						<img className='image' src={image1} alt=''/>
					</Col>
					<Col md={4}>
						<div className="description">
							<h2 className='h2'>Create an invite-only place where you belong</h2>
							<p className='text'>Discord servers are organized into topic-based channels where you can collaborate, 
								share, and just talk about your day without clogging up a group chat.</p>
						</div>
					</Col>
				</Row>
				<Row >
					<Col md={4}>
						<div className="description">
							<h2 className='h2'>Where hanging out is easy</h2>
							<p className='text'>Grab a seat in a voice channel when you’re free. Friends in your 
							server can see you’re around and instantly pop in to talk without having to call.</p>
						</div>
					</Col>
					<Col md={8}>
						<img className='image' src={image2} alt=''/>
					</Col>
				</Row>
				<Row >
					<Col md={8}>
						<img className='image' src={image3} alt=''/>
					</Col>
					<Col md={4}>
						<div className="description">
							<h2 className='h2'>From few to a fandom</h2>
							<p className='text'>Get any community running with moderation tools and custom member access. 
							Give members special powers, set up private channels, and more.</p>
						</div>
					</Col>
				</Row>
				<Row >
					<Col>
						<div className="description">
							<h2 className='h2'>RELIABLE TECH FOR STAYING CLOSE</h2>
							<p className='text'>Low-latency voice and video feels like you’re in the same room. Wave hello over video, 
							watch friends stream their games, or gather up and have a drawing session with screen share.</p>
						</div>
					</Col>
				</Row>
				<Row>
					<Col style={{position:'relative'}}>
						<img className='big' style={{width: '100%'}}  src={image4} alt=''/>
					</Col>
				</Row>
        <Row id='last'>
          <div className="lastheading">
            <h2>Ready to start your journey?</h2>
            <div className="d-flex justify-content-center">
            <Button >
              Download From Linux
            </Button>
            </div>
          </div>
        </Row>
			</Container>
      <Footer />
		</div>
	)
}

export default Home;
