import { useState } from "react";
import Header from "./components/Header";
import {v4 as uuidv4} from 'uuid';
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from './components/FeedbackForm';


function App() {

  // feedback Lsit
  const [feedbacks, setFeedbacks] = useState([]);

  
  // delete item from list
  const handleDelete = (id) => {
    if (window.confirm('are you sure you want to delete this ?')) {
      const feedbackList = feedbacks.filter((item) => item.id !== id);
      setFeedbacks(feedbackList);
    }
  }


  const addFeedback = (newFeedback)=>{
    newFeedback.id = uuidv4();
    console.log(newFeedback)
   setFeedbacks([...feedbacks,newFeedback]);
  }


  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} handleDelete={handleDelete} />
      </div>
    </>
  )
}

export default App;
