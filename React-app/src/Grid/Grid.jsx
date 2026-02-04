import Card from '../Card/Card.jsx'
import './Grid.css'
import React, {useState} from 'react';
import Celebrate from '../Confetti/Confetti.jsx';
import Beg from '../assets/Beggy_image.jpg'

function Grid() {

  const words = ["Will", "Will", "You", "You", "Be", "Be", "My", "My", "Valentines?", "Valentines?"];
  
  const [count, setCount] = useState(-1);
  const [flipped, setFlipped] = useState(false);

  const flipGrid = () => {
    setFlipped(true);
  }

  const increment = () => {
    setCount(count + 1);
  }

  const finish = () => {
    flipGrid();
    Celebrate();
  }

  return (
    <div className={`grid-outer ${flipped ? 'flipped' : ''}`}>
      <div className='grid-inner'>
        <div className='grid'>
          <div className='row'>
            <div className='element' onClick={increment}>
              <Card name={words[count]} num={count} list={words}/>
            </div>
            <div className='element' onClick={increment}>
              <Card name={words[count]} num={count} list={words}/>
            </div>
            <div className='element' onClick={increment}>
              <Card name={words[count]} num={count} list={words}/>
            </div>
            <div className='element' onClick={increment}>
              <Card name={words[count]} num={count} list={words}/>
            </div>
          </div>
          <div className='row'>
            <div className='element' onClick={increment}>
              <Card name={words[count]} num={count} list={words}/>
            </div>
            <div className='element' onClick={increment}>
              <Card name={words[count]} num={count} list={words}/>
            </div>
            <div className='element' onClick={increment}>
              <Card name={words[count]} num={count} list={words}/>
            </div>
            <div className='element' onClick={increment}>
              <Card name={words[count]} num={count} list={words}/>
            </div>
          </div>
          <div className='row'>
            <div className='element' onClick={increment}>
              <Card name={words[count]} num={count} list={words}/>
            </div>
            <div className='element' onClick={increment}>
              <Card name={words[count]} num={count} list={words}/>
            </div>
            <div className='element' onClick={increment}>
              <Card name={words[count]} num={count} list={words}/>
            </div>
            <div className='element' onClick={increment}>
              <Card name={words[count]} num={count} list={words}/>
            </div>
          </div>
          <div className='row'>
            <div className='element' onClick={increment}>
              <Card name={words[count]} num={count} list={words}/>
            </div>
            <div className='element' onClick={increment}>
              <Card name={words[count]} num={count} list={words}/>
            </div>
            <div className='element' onClick={increment}>
              <Card name={words[count]} num={count} list={words}/>
            </div>
            <div className='element' onClick={increment}>
              <Card name={words[count]} num={count} list={words}/>
            </div>
          </div>
          {(count == 9) && <button onClick={finish}>Yes?</button>}
        </div>
        <div className='grid-back'>
          <img src={Beg} alt="Begging image"/>
          <h2>Thank you! :3</h2>
        </div>
      </div>
    </div>
  )
}

export default Grid
