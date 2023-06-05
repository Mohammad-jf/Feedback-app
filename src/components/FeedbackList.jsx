import React from 'react'
import FeedBackItem from './FeedBackItem'
import { PropTypes } from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion'



const FeedbackList = ({ feedbacks, handleDelete }) => {
    if (!feedbacks || feedbacks.length === 0) {
        return <p style={{textAlign:"center",marginTop:'1rem'}}>No Feedback Yet</p>
    }

    return (
        <div className='feeback-list'>
            <AnimatePresence>
                {feedbacks.map((feedback) => {
                    return (
                        <motion.div
                            key={feedback.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <FeedBackItem key={feedback.id} item={feedback} handleDelete={handleDelete} />
                        </motion.div>
                    )
                })}
            </AnimatePresence>
        </div>
    )
}


FeedbackList.propTypes = {
    feedbacks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    )
}

export default FeedbackList