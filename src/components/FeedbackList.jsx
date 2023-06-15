import React from 'react'
import FeedBackItem from './FeedBackItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react';
import FeedBackContext from '../context/FeedBackContext';
import Spinner from './../shared/Spinner';



const FeedbackList = () => {
    const { feedbacks, isLoading } = useContext(FeedBackContext)


    if (!isLoading && (!feedbacks || feedbacks.length === 0)) {
        return <p style={{ textAlign: "center", marginTop: '1rem' }}>No Feedback Yet</p>
    }

    return isLoading ? <Spinner /> : (
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
                            <FeedBackItem key={feedback.id} item={feedback} />
                        </motion.div>
                    )
                })}
            </AnimatePresence>
        </div>
    )
}




export default FeedbackList