import React from 'react'
import cardFront from '../Images/c.png';
import cardBack from "../Images/Group 6.jpg";
import './CreditCard.css'
function CreditCard() {
  return (
    <div>
        <div className='front'>
            <img src={cardFront}  />
        </div>
        <div className='back'>
            <img src={cardBack} />
        </div>
    </div>
  )
}

export default CreditCard