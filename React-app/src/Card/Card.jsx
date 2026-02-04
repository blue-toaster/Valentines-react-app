import './Card.css'
import viteLogo from '/vite.svg'
import React, {useState} from 'react';


function Card(prop) {

  const [num, setNum] = useState(Infinity)

  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(true);
  }

  if (flipped && num == Infinity) {
    setNum(prop.num);
  }

  

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`}>
       <div className='card-inner' onClick={handleClick}>
        <div className='card-front'>
          <p>&#128151;</p>
        </div>
        <div className={`card-back ${(num == 8 || num == 9) ? 'special' : ''}`}>
          <p>{prop.list[num]}</p>
        </div>
        
      </div>
    </div>
   
  )
}

export default Card;
