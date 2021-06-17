import {Container, Row, Col} from 'reactstrap';
import './Home.scss';
import { Button} from 'react-bootstrap';

function Home() {
	return (
		<div>
      <Row id='main'>
			  <div className="description">
					<h2>IMAGINE A PLACE...</h2>
					<p>...where you can belong to a school club, a gaming group, or a worldwide art community. 
						Where just you and a handful of friends can spend time together. 
						A place that makes it easy to talk every day and hang out more often.</p>
          <Button id='download'>
              Download From Linux
          </Button>
          <Button id='open'>
            Open Discord in browser
          </Button>
        </div>
        {/* <div className='image'>
          <img className='back' src={'https://discord.com/assets/e6d57714479874c665b36c7adee76b1d.svg' } alt=''/>
          <img className='left' src={'https://discord.com/assets/8a8375ab7908384e1fd6efe408284203.svg' } alt='' />
          <img className='right' src={'https://discord.com/assets/c40c84ca18d84633a9d86b4046a91437.svg' } alt='' />
        </div> */}
      </Row>
			<Container>
				<Row >
					<Col md={8}>
						<img className='image' src={'https://discord.com/assets/46b2132c01604c9493d558de444929f4.svg'} alt=''/>
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
						<img className='image' src={'https://discord.com/assets/575a0322f3b36ca2fecb23ad2c6dd5ad.svg'} alt=''/>
					</Col>
				</Row>
				<Row >
					<Col md={8}>
						<img className='image' src={'https://discord.com/assets/921b1ae33edca174b6ebe787bb8b6c3b.svg'} alt=''/>
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
					<Col>
						<img className='image' src={'https://discord.com/assets/98ea5b9e92e304c7d352ac462996adc5.svg'} alt=''/>
					</Col>
				</Row>
        <Row id='last'>
          <div className="lastheading">
            <h2>Ready to start your journey?</h2>
            <Button>
              Download From Linux
            </Button>
          </div>
        </Row>
			</Container>
		</div>
	)
}

export default Home;
