import React, { useState } from 'react'
import './Carddetails.css'
function Carddetails() {

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(cardName.length === 0 || /[0-9]/.test(cardName) || cardNumber.length === 0 || /[a-z]/.test(cardNumber) || /[A-Z]/.test(cardNumber) || month.length === 0 || /[a-z]/.test(month) || /[A-Z]/.test(month) || year.length === 0 || /[a-z]/.test(year) || /[A-Z]/.test(year) || cvv.length === 0 || /[a-z]/.test(cvv) || /[A-Z]/.test(cvv) || Number(month) > 12){
      setError(true)
    }
  }

  return (
    <form className='frm' onSubmit={handleSubmit}>
      <div className='card'>
        <label className='crd'>CARDHOLDER NAME</label>
        <input type='text' className='cname cmn'placeholder='e.g. Jane Appleseed' onChange={e => setCardName(e.target.value)}/>
        {error && cardName.length <= 0 ? <label className='lbl'>Cardholder name required</label> : ""}
        {error && /[0-9]/.test(cardName) ? <label className='lbl'>Cardholder name must be characters</label> : ""}
        <label className='crdno'>CARD NUMBER</label>
        <input type='text' className='cname cmn' placeholder='e.g. 1234 5678 9123 0000' onChange={e => setCardNumber(e.target.value)}/>
        {error && cardNumber.length <= 0 ? <label className='lbl'>CardNumber required</label> : ""}
        {error && (/[a-z]/.test(cardNumber) || /[A-Z]/.test(cardNumber)) ? <label className='lbl'>Cardnumber must be numeric</label> : ""}
        <div className='details'>
          <div>
            <label className='a'>EXP. DATE(MM/YY)</label><br/>
            <input type='text'placeholder='MM' className='exp cmn' onChange={e => setMonth(e.target.value)}/>
            
            {error && month.length <= 0 ? <label className='lbl'>Month is required</label> : ""}
            {error && (/[a-z]/.test(month) || /[A-Z]/.test(month)) ? <label className='lbl'>Month must be numeric</label> : ""}
            {error && Number(month) > 12 ? <label className='lbl'>Month can't be greater than 12</label> : ""}
            <input type='text'placeholder='YY' className='exp cmn' onChange={e => setYear(e.target.value)}/>
          
            {error && year.length <= 0 ? <label className='lbl'>Year is required</label> : ""}
            {error && (/[a-z]/.test(year) || /[A-Z]/.test(year)) ? <label className='lbl'>Year must be numeric</label> : ""}
          
            <label>CVV</label>
            <input type='text' placeholder='e.g. 123' className='cvv cmn' onChange={e => setCvv(e.target.value)}/>
            {error && cvv.length <= 0 ? <label className='lbl'>CVV required</label> : ""}
            {error && (/[a-z]/.test(cvv) || /[A-Z]/.test(cvv)) ? <label className='lbl'>CVV must be numeric</label> : ""}
          </div>
        </div>
        <button>Confirm</button>
      </div>
    </form>
  )
}

export default Carddetails