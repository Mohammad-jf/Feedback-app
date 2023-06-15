import React, { useContext } from 'react'
import FeedBackContext from '../context/FeedBackContext';

const FeedbackStats = () => {
    const { feedbacks } = useContext(FeedBackContext)

    //average rating
    let average = feedbacks.reduce((acc, current) => {
        return acc + current.rating;
    }, 0) / feedbacks.length;

    average = average.toFixed(1).replace(/[.,]0$/, '');

    return (
        <div className='feedback-stats'>
            <h4>{feedbacks.length} Reviews</h4>
            <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}



export default FeedbackStats