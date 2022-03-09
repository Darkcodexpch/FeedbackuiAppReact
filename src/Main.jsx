import Header from "./Components/Header";
import FeedbackitemList from "./Components/FeedbackitemList";
import FeedbackStack from "./Components/FeedbackStack";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackData from "./Data/FeedbackData";
import './App.scss'
import { useState } from "react";

export default function Main() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
  setFeedback([newFeedback,...feedback]);

  }
  const DeleteFeedbackData = (id) => {
    window.confirm('Are you sure You want to delete??')
    setFeedback(feedback.filter((item) => item.id !== id));
  }
  return (
    <>
      <Header />
      <main>
        <div className="Container">
          <FeedbackForm handleAdd={addFeedback} />
          <FeedbackStack feedback={feedback} />
          <FeedbackitemList feedback={feedback} handleDelete={DeleteFeedbackData} />
        </div>
      </main>


    </>
  )
}
