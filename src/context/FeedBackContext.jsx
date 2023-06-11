import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


// first you create a context
const FeedBackContext = createContext();

// second you create a provider for that context
export const FeedbackProvider = ({ children }) => {

    const [feedbacks, setFeedbacks] = useState([]);


    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });


    // adding feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedbacks([...feedbacks, newFeedback]);
    }



    // deleting feedback
    const handleDelete = (id) => {
        if (window.confirm('are you sure you want to delete this ?')) {
            const feedbackList = feedbacks.filter((item) => item.id !== id);
            setFeedbacks(feedbackList);
        }
    }


    //set item for edit
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }


    // updating the feedback
    const updateFeedback = (id, updItem) => {
        setFeedbacks(feedbacks.map((item) => {
            if (item.id === id) {
                return {
                    ...item, ...updItem
                }
            } else {
                return item
            }
        }))
    }


    // pass state as value to provider
    return <FeedBackContext.Provider value={{
        feedbacks,
        feedbackEdit,
        addFeedback,
        handleDelete,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedBackContext.Provider>

}


export default FeedBackContext;