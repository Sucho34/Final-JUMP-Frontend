import './App.css';
import HomeNavbar from "./components/HomeNavbar"
import axios from 'axios';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ReviewPage from './components/ReviewPage'
import 'bootstrap/dist/css/bootstrap.min.css';


const fetchData = () => {
  const getAllRestaurants = 'http://localhost:8080/api/restaurant';
  const getAllUsers = 'http://localhost:8080/api/user';

  const restaurantGet = axios.get(getAllRestaurants)
  const userGet = axios.get(getAllUsers)
  axios.all([restaurantGet, userGet]).then(
    axios.spread((...allData) => {
      const allRestaurantData = allData[0]
      const allUserData = allData[1]

      console.log(allRestaurantData)
      console.log(allUserData)
    })
  )
}



function App() {
  return (
    <div className="bgColor">
      <Router>
        
          <HomeNavbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/reviews" component={ReviewPage}/>
            <Route/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
