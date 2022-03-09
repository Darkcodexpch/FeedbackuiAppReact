import React, { useState } from 'react'
import Card from '../Shared/Card';
import { FaTimes } from 'react-icons/fa'
export default function FeedbackItem({item ,handleDelete}) {
    const [rating, Setrating] = useState(item.rating);
    const [text, Settext] = useState(item.text);
    return (
        <Card>
            <div className='Card-rating'>
                {rating}
            </div>
            <button className='close' onClick={()=>handleDelete(item.id)}>
                <FaTimes color='purple'/>
            </button>
            <div className='card-description'>
                {text}
            </div>
        </Card>
    )
}
