import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import Card from '../Shared/Card'
import Button from '../Shared/Button'
import RatingSelect from './RatingSelect';
export default function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState('');
  const [btnDisable, setBtnDisable] = useState(true)
  const [rating, setRating] = useState()
  const [message, setMessage] = useState('')
  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisable(true);
      setMessage(null)
    }
    else if (text !== ' ' && text.trim().length <= 10) {
      setBtnDisable(true)
      setMessage('Text Atleast 10 characters')

    }
    else {
      setBtnDisable(false);
      setMessage(null)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      let id = uuidv4();
      const newFeedback = {
        id,
        text,
        rating
      }
      handleAdd(newFeedback)
      setText('');
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>how would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className="input-group">
          <input type="text" placeholder='Write a review'
            value={text} onChange={handleTextChange} />
          <Button type='submit' version='secondary' isDisable={btnDisable}>Submit</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}
