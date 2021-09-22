import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { useParams } from "react-router";
import { Card, Button, Modal, ToggleButton } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import "../CSS/Cards.css"
import  ReviewModal  from "./ReviewModal";

const ReviewPage = () => {
    // const {id} = useParams();
    // console.log(id);

    const reviews = [
        {name: "Devon", userRating: 4, comment: "Great Food", createdOn: "2021-09-21"},
        {name: "Nick", userRating: 2, comment: "Bad Food", createdOn: "2021-09-20"},
        {name: "Payton", userRating: 3, comment: "Good Food", createdOn: "2021-09-17"},
        {name: "Matt", userRating: 5, comment: "Best Food", createdOn: "2021-09-18"}
    ]




    const renderReviewCard = (review, index) => {
        return (
            <div className="review-card-wrapper">
            <Card className="cardSpacing" style={{ width: '18rem' }} key={index}>
            <Card.Body>
              <Card.Title>{review.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{review.createdOn}</Card.Subtitle>
              <Card.Text>
                {review.comment}
              </Card.Text>
              <StarRatingComponent name={"starRate"} value={review.userRating} editing={false}/>
            </Card.Body>
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
               {reviews.map(renderReviewCard)} 
          

        </div>
        )
   }



export default ReviewPage;