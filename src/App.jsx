import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedBackContext";


function App() {
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
          <Routes>
              <Route
                path="/"
                exact
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </>}
              />
              <Route path="/about" exact element={<About />} />
          </Routes>

          <AboutIconLink />
      </div>
    </FeedbackProvider>

  )
}

export default App;
