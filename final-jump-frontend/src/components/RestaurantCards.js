import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import food from "../assets/imageTest.jpg"
import "../CSS/RestaurantCards.css"
import axios from "axios";

const RestaurantCards = () => {
    const [restaurantData, setRestaurants] = useState([]);

    const url = "http://localhost:8080/api/restaurant";

    useEffect(() => {
        getAllRestaurants();
    }, [])
    
    const getAllRestaurants = () => {
        axios.get(url)
        .then((response) => {
            const allRestaurants = response.data
            setRestaurants(allRestaurants)
        })
    }


    // const restaurantInfo = [
    //     {name: "Wendy's", description: "The chain is known for its square hamburgers, sea salt fries, and the Frosty, a form of soft-serve ice cream mixed with starches.", address: "1 Dave Thomas Boulevard"},
    //     {name: "Chipotle", description: "Chipotle is an American restaurant chain that serves a simple menu of Mexican-inspired food.", address: "United States, California, Newport Beach, Newport Center Dr"},
    //     {name: "BurgerFi", description: "American fast casual restaurant chain focused on hormone-free and antibiotic-free angus hamburgers, french fries, hot dogs, and custard.", address: "105 US Highway One North Palm Beach, Florida 33408"},
    //     {name: "McDonald's", description: "McDonald's, in full McDonald's Corporation, American fast-food chain that is one of the largest in the world, known for its hamburgers.", address: "110 North Carpenter Street Chicago, IL 60607"},
    // ]
    
    const renderCard = (restaurants, index) => {
        return (
            <Card className="cardSpacing" style={{ width: '18rem' }} key={index}>
             <Card.Img variant="top" src={food}/>
              <Card.Body>
               <Card.Title>{restaurants.name}</Card.Title>
               <Card.Text>
                   {restaurants.description} 
               </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{restaurants.address}</ListGroupItem>
              </ListGroup>
             <Card.Body>
               {/* Will need an on-click function to our Review Modal for review button*/}
               <Button>Review</Button>
             </Card.Body>
            </Card>
        );
    };
    
    return <div>{restaurantData.map(renderCard)}</div>
        
};


export default RestaurantCards;