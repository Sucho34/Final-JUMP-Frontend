import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component'

class StarReview extends Component {
    constructor() {
        super();

        this.state = {
            rating: 1
        };
    }
    
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }
    
    
    render() {
        const { rating } = this.state;

        return (
            <div>
                {/* <h2>Rating from state: {rating}</h2> */}
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    editing={false}
                    value={3}
                    onStarClick={this.onStarClick.bind(this)}
                    />
            </div>
        )
    }
}

export default StarReview