import Card from '../Card/Card.jsx'
import './Grid.css'
import viteLogo from '/vite.svg'
import React, {useState} from 'react';

function Grid() {
  const words = ["Will", "Will", "You", "You", "Be", "Be", "My", "My", "Valentines?", "Valentines?"];
  
  const [count, setCount] = useState(-1);

  const increment = () => {
    setCount(count + 1);
  }

  return (
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
    </div>
  )
}

export default Grid
