import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.scss';
import Home from './components/Pages/Home'; 
import Float from './components/Pages/Float';
import FloatNav from './components/FloatNav';
import FloatFooter from './components/FloatFooter';
import Lusha from './components/lusha/LushaHome';
import LushaNav from './components/lusha/LushaNav';
import LushaFooter from './components/lusha/LushaFooter';


function App() {
  return (
    <Router>
      
      <Switch>
        <Route path='/' exact>

          <Redirect to='/lusha' />
        </Route>
        <Route path='/home' >
          <Home />
        </Route>
        <Route path='/float' >
          <FloatNav />
          <Float />
          <FloatFooter />
        </Route>
        <Route path='/lusha' >
          <LushaNav />
          <Lusha />
          <LushaFooter />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
