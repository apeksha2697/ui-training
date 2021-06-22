import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.scss';
import Home from './components/Pages/Home'; 
import Float from './components/Pages/Float';
import FloatNav from './components/FloatNav';
import FloatFooter from './components/FloatFooter';


function App() {
  return (
    <Router>
      
      <Switch>
        <Route path='/' exact>

          <Redirect to='/float' />
        </Route>
        <Route path='/home' >
          <Home />
        </Route>
        <Route path='/float' >
          <FloatNav />
          <Float />
          <FloatFooter />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
