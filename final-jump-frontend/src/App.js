import './App.css';
import HomeNavbar from "./components/HomeNavbar"
import axios from 'axios';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ReviewPage from './components/ReviewPage'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="bgColor">
      <Router>
          <HomeNavbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/reviews/:id" component={ReviewPage}>
            </Route>
            <Route/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
