import { createContext, useEffect, useState } from "react";

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


    // fetch data from json server when page loaded
    useEffect(() => {
        fetchFeedback();
    }, []);


    // make a request for getting feedback
    const fetchFeedback = async () => {
        const response = await fetch('/feedback?_sort=id&_order=desc');
        const data = await response.json();
        setFeedbacks(data)
        setIsLoading(false);
    }


    // adding feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFeedback),
        });
        const data = await response.json();
        setFeedbacks([data, ...feedbacks]);
    }



    // deleting feedback
    const handleDelete = async (id) => {
        if (window.confirm('are you sure you want to delete this ?')) {

            await fetch(`/feedback/${id}`, { method: "DELETE" });

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
    const updateFeedback = async (id, updItem) => {

        const response = await fetch(`/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updItem),
        });

        const data  = await response.json();
        
        setFeedbacks(feedbacks.map((item) => {
            if (item.id === id) {
                return {
                    ...item, ...data
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