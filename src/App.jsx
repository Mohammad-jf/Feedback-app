import { useState } from "react";
import Header from "./components/Header";
import feedbackData from "./data/feedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";



function App() {
  // feedback Lsit
  const [feedbacks, setFeedbacks] = useState(feedbackData);

  // delete item from list
  const handleDelete = (id) => {
    if (window.confirm('are you sure you want to delete this ?')) {
      const feedbackList = feedbacks.filter((item) => item.id !== id);
      setFeedbacks(feedbackList);
    }
  }


  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} handleDelete={handleDelete} />
      </div>
    </>
  )
}

export default App;
