import FeedbackItem from "./FeedbackItem"
export default function FeedbackitemList({feedback,handleDelete}) {
    return (
        <div className="feedbacklist">
            {feedback.map(items => (
                <FeedbackItem key={items.id} item={items} handleDelete={handleDelete}/>
            ))}
        </div>
    )
}
