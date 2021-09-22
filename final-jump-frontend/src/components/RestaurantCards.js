import React, { useEffect, useState, Item } from "react";
import Axios from "axios";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { useHistory } from "react-router";
import food from "../assets/imageTest.jpg"
import "../CSS/Cards.css"
import axios from "axios";
import StarReview from "./StarReview";



const RestaurantCards = () => {
    const [restaurantData, setRestaurants] = useState([]);
    const [id, setID] = useState("");
    const [position, setPosition] = useState("");

    const restaurantURL = "http://localhost:8080/api/restaurant";
    const reviewURL = "http://localhost:8080/api/review/restaurant/:id"

    useEffect(() => {
        getAllRestaurants();
    }, [])
    
    const getAllRestaurants = () => {
        axios.get(restaurantURL)
        .then((response) => {
            const allRestaurants = response.data
            setRestaurants(allRestaurants)
            console.log(restaurantData)
        })
    }

    const history = useHistory();
    const onRouteChange= () => history.push(`/reviews/` + restaurantData[0].id)


    const grabID = (id) => {
        return id;
    }
    
    // const restaurantInfo = [
    //     {name: "Wendy's", description: "The chain is known for its square hamburgers, sea salt fries, and the Frosty, a form of soft-serve ice cream mixed with starches.", address: "1 Dave Thomas Boulevard"},
    //     {name: "Chipotle", description: "Chipotle is an American restaurant chain that serves a simple menu of Mexican-inspired food.", address: "United States, California, Newport Beach, Newport Center Dr"},
    //     {name: "BurgerFi", description: "American fast casual restaurant chain focused on hormone-free and antibiotic-free angus hamburgers, french fries, hot dogs, and custard.", address: "105 US Highway One North Palm Beach, Florida 33408"},
    //     {name: "McDonald's", description: "McDonald's, in full McDonald's Corporation, American fast-food chain that is one of the largest in the world, known for its hamburgers.", address: "110 North Carpenter Street Chicago, IL 60607"},
    // ]
    
    const renderCard = (restaurants, index) => {
        return (
            <div className="restaurant-card-bg">
            <a style={{cursor: 'pointer'}} onClick={ () => setID(restaurants.id), onRouteChange}>
            <Card className="cardSpacing" style={{ width: '18rem', height: "35rem" }} key={index}>
             <Card.Img key="image" variant="top" src={food}/>
              <Card.Body>
               <Card.Title key="name">{restaurants.name}</Card.Title>
               <Card.Text key="description">
                   {restaurants.description} 
               </Card.Text>
              </Card.Body>
              <ListGroup key="listGroup"className="list-group-flush">
                <ListGroupItem key="address">{restaurants.address}</ListGroupItem>
              </ListGroup>
             <Card.Body>
               {/* Will need an on-click function to our Review Modal for review button*/}
               <StarReview/>
               {/* <Button onClick={console.log(id)}></Button> */}
             </Card.Body>
            </Card>
            </a>
        </div>
        );
    };
    
    
    return <div style={{display: "flex", flexWrap: "wrap"}}>{restaurantData.map(renderCard)}</div>
        
};


export default RestaurantCards;