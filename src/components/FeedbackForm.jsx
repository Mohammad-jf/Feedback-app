import React, { useContext } from 'react'
import Card from './../shared/Card';
import { useState } from 'react';
import Button from '../shared/Button';
import RatingSelect from './RatingSelect';
import FeedBackContext from '../context/FeedBackContext';
import { useEffect } from 'react';



const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedBackContext);

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating)
        }

    }, [feedbackEdit])


    const handleTextchange = (e) => {
        //input validation
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }

        setText(e.target.value);
    }


    // add feedback
    const handleFeedback = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {

            const newFeedback = {
                text,
                rating,
            }

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
                setText('');

            } else {
                addFeedback(newFeedback)
                setText('');

            }
        }

    }


    return (
        <Card>
            <form onSubmit={handleFeedback}>
                <h2>Wow would you rate your service with us?</h2>

                <RatingSelect select={(rating) => setRating(rating)} />

                <div className="input-group">
                    {/* text input */}
                    <input type="text"
                        placeholder='write a review..'
                        onChange={handleTextchange}
                        value={text} />

                    {/* submit button */}
                    <Button
                        type='submit'
                        version='secondary'
                        isDisabled={btnDisabled}>Send
                    </Button>
                </div>

                {message &&
                    <div>
                        {message}
                    </div>}
            </form>
        </Card>
    )
}

export default FeedbackForm