import './Card.css'
import viteLogo from '/vite.svg'
import React, {useState} from 'react';


function Card(prop) {

  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  }

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`}>
       <div className='card-inner' onClick={handleClick}>
        <div className='card-front'>
          <p>&#128151;</p>
        </div>
        <div className='card-back'>
          <p>temp</p>
        </div>
        
      </div>
    </div>
   
  )
}

export default Card;
