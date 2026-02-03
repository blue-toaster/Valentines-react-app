import Card from '../Card/Card.jsx'
import './Grid.css'
import viteLogo from '/vite.svg'

function Grid() {
  console.log(window.innerWidth)
  return (
    <div className='grid'>
      <div className='row'>
        <Card name='1 1'/>
        <Card name='1 2'/>
        <Card name='1 3'/>
        <Card name='1 4'/>
        <Card name='1 5'/>
      </div>
      <div className='row'>
        <Card name='2 1'/>
        <Card name='2 2'/>
        <Card name='2 3'/>
        <Card name='2 4'/>
        <Card name='2 5'/>
      </div>
      <div className='row'>
        <Card name='3 1'/>
        <Card name='3 2'/>
        <Card name='3 3'/>
        <Card name='3 4'/>
        <Card name='3 5'/>
      </div>
      <div className='row'>
        <Card name='4 1'/>
        <Card name='4 2'/>
        <Card name='4 3'/>
        <Card name='4 4'/>
        <Card name='4 5'/>
      </div>
      <div className='row'>
        <Card name='5 1'/>
        <Card name='5 2'/>
        <Card name='5 3'/>
        <Card name='5 4'/>
        <Card name='5 5'/>
      </div>
    </div>
  )
}

export default Grid
