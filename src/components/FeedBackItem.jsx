import React from 'react'
import Card from '../shared/Card'
import { PropTypes } from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import FeedBackContext from '../context/FeedBackContext';


const FeedBackItem = ({ item }) => {
    const { handleDelete, editFeedback } = useContext(FeedBackContext);

    return (
        <Card>
            <div className="num-display">{item.rating}</div>

            <button
                className='close'
                onClick=
                {() => handleDelete(item.id)}>
                <FaTimes color='purple' />
            </button>

            <button className="edit" onClick={() => editFeedback(item)}>
                <FaEdit color='red' />
            </button>

            <div className="text-display">{item.text}</div>
        </Card>
    )
}


FeedBackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedBackItem