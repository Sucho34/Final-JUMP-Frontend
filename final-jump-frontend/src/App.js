import './App.css';
import HomeNavbar from "./components/HomeNavbar"
import RestaurantCards from './components/RestaurantCards';
import { Grid } from "@mui/material"
import axios from 'axios';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';

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
      <HomeNavbar/>
      <div>
        <RestaurantCards/>
      </div>
      <div>
        <Button onClick={fetchData}></Button>
      </div>
    </div>
  );
}

export default App;
