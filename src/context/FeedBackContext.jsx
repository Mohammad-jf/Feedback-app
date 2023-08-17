import { createContext, useState } from "react";

// first you create a context
const FeedBackContext = createContext();


// second you create a provider for that context
export const FeedbackProvider = ({ children }) => {
    // spinner state
    const [isLoading, setIsLoading] = useState(true);

    // ARRAY OF FEEDBACKS
    const [feedbacks, setFeedbacks] = useState([]);

    // edited feedback state
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });


    // adding feedback
    const addFeedback = (newFeedback) => {
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
        isLoading,
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