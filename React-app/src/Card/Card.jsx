import './Card.css'
import viteLogo from '/vite.svg'


function Card(prop) {

  return (
    <div className='card'>
      <img alt={prop.name} src={prop.image}/>
    </div>
  )
}

export default Card;
