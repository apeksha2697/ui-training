import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.scss';
import Schedule from './components/Pages/Schedule';
import Home from './components/Pages/Home';


function App() {
  return (
    <Router>
      
      <Switch>
        <Route path='/' exact>

          <Redirect to='/home' />
        </Route>
        <Route path='/home' >
          <Home />
        </Route>
        <Route path='/schedule' >
          <Schedule />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
