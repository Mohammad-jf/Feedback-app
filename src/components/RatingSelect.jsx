import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import FeedBackContext from '../context/FeedBackContext';
import { useEffect } from 'react';



const RatingSelect = ({ select }) => {
    const [selected, setSelected] = useState(10);
    const lis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const { feedbackEdit } = useContext(FeedBackContext);


    useEffect(() => {
        feedbackEdit.edit ? setSelected(feedbackEdit.item.rating) : setSelected(10);
    }, [feedbackEdit]);

    const handleChange = (e) => {
        setSelected(+e.target.value);
        select(+e.target.value)
    }


    return (
        <ul className='rating'>
            {lis.map((li, index) => {
                return (
                    <li key={index}>
                        <input
                            type="radio"
                            name="rating"
                            id={`num${li}`}
                            value={li}
                            onChange={handleChange}
                            checked={selected === li}
                        />
                        <label htmlFor={`num${li}`}>{li}</label>
                    </li>
                )
            })}
        </ul>

    )
}

export default RatingSelect