import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navigationbar';
import Home from './components/Pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
