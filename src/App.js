import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navigationbar';
import Home from './components/Pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
        <Route path='/home' >
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
