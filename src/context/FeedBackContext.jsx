import { createContext, useState } from "react";
import useLocalStorage from './../hooks/useLocalStorage';
// first you create a context
const FeedBackContext = createContext();


// second you create a provider for that context
export const FeedbackProvider = ({ children }) => {
    // spinner state
    const [isLoading, setIsLoading] = useState(true);

    const [localFeedBacks, setLocalFeedBacks] = useLocalStorage('feedbacks', []);

    // ARRAY OF FEEDBACKS
    const [feedbacks, setFeedbacks] = useState(localFeedBacks.length > 0 ? localFeedBacks : []);

    // edited feedback state
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });


    // adding feedback
    const addFeedback = (newFeedback) => {
        setFeedbacks([...feedbacks, newFeedback]);
        setLocalFeedBacks([...feedbacks, newFeedback]);
    }



    // deleting feedback
    const handleDelete = (id) => {
        if (window.confirm('are you sure you want to delete this ?')) {
            const feedbackList = feedbacks.filter((item) => item.id !== id);
            setFeedbacks(feedbackList);
            setLocalFeedBacks(feedbackList)
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
        const editedFeedBacks = feedbacks.map((item) => {
            if (item.id === id) {
                return {
                    ...item, ...updItem
                }
            } else {
                return item
            }
        })
        setFeedbacks(editedFeedBacks)
        setLocalFeedBacks(editedFeedBacks)
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