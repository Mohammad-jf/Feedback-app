import React from 'react'
import FeedBackItem from './FeedBackItem'
import { PropTypes } from 'prop-types';



const FeedbackList = ({ feedbacks, handleDelete }) => {
    return (
        <div className='feeback-list'>
            {feedbacks.map((feedback) => {
                return (
                    <FeedBackItem key={feedback.id} item={feedback} handleDelete={handleDelete} />
                )
            })}
        </div>
    )
}


FeedbackList.propTypes = {
    feedbacks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    )
}

export default FeedbackList