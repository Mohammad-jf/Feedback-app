import React from 'react'
import { PropTypes } from 'prop-types';

const FeedbackStats = ({ feedbacks }) => {

    //average rating
    let average = feedbacks.reduce((acc, current) => {
        return acc + current.rating;
    }, 0) / feedbacks.length;

    average = average.toFixed(1).replace(/[.,]0$/,'');
    
    return (
        <div className='feedback-stats'>
            <h4>{feedbacks.length} Reviews</h4>
            <h4>AverageRating : {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}


FeedbackStats.propTypes = {
    feedbacks : PropTypes.array.isRequired,
}

export default FeedbackStats