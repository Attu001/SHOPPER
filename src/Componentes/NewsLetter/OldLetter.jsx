import React from 'react'
import './OldLetter.css'


const OldLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div >
            <input type='email' placeholder='Enter Your Email'></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default OldLetter