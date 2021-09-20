import './App.css';
import HomeNavbar from "./components/HomeNavbar"
import RestaurantCards from './components/RestaurantCards';
import { Grid } from "@mui/material"

function App() {
  return (
    <div className="bgColor">
      <HomeNavbar/>
      <div>
        <RestaurantCards/>
      </div>
    </div>
  );
}

export default App;
