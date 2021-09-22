import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { useParams } from "react-router-dom";
import { Card, Button, Modal, ToggleButton } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import "../CSS/Cards.css"
import  ReviewModal  from "./ReviewModal";
import RestaurantCards from "./RestaurantCards";
import axios from 'axios';


const ReviewPage = () => {
    const [reviewsData, setReviews] = useState([]);
    const reviewURL = "http://localhost:8080/api/review/restaurant/1"
    // const {id} = useParams();
    // console.log(id);
  
    useEffect(() => {
      getAllReviews();
    }, [null])

    const getAllReviews = () => {
      axios.get(reviewURL)
      .then((response) => {
          let allReviews = response.data
          setReviews(allReviews)
          console.log(reviewsData)
      })
    }

    // const reviews = [
    //     {name: "Devon", userRating: 4, comment: "Great Food", createdOn: "2021-09-21"},
    //     {name: "Nick", userRating: 2, comment: "Bad Food", createdOn: "2021-09-20"},
    //     {name: "Payton", userRating: 3, comment: "Good Food", createdOn: "2021-09-17"},
    //     {name: "Matt", userRating: 5, comment: "Best Food", createdOn: "2021-09-18"}
    // ]

    // const getRestaurantReviews = (restaurantID) => {
    //     axios.get(reviewURL + restaurantID)
    // }




    const renderReviewCard = (review, index) => {
        return (
            <div className="review-card-wrapper">
            <Card className="cardSpacing" style={{ width: '18rem', height: '18rem' }} key={index}>
            <Card.Body>
              <Card.Title>{review.user.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{review.createdOn}</Card.Subtitle>
              <div className="card-text-spacing">
              <Card.Text>
                {review.comment}
              </Card.Text>
              </div>
            </Card.Body>
            <div className="star-spacing">
            <StarRatingComponent name={"starRate"} value={review.rating} editing={false}/>
            </div>
          </Card> 
        </div>
        )
    }

    const [show, setShow] = useState(false);
    const closeModalHandler = () => setShow(false);
    
        return (
        <div  className="review-card-bg" >
            
            <button onClick={() => setShow(true) }className="btn-openModal">Write a review</button>
         
               <ReviewModal show={show} close ={closeModalHandler}/>
               <div style={{display: "flex", flexWrap: "wrap"}}>{reviewsData.map(renderReviewCard)}</div>
        </div>
        )
   }



export default ReviewPage;