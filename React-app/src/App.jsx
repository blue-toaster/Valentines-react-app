import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card/Card.jsx'
import Grid from './Grid/Grid.jsx'

function App() {

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Play a game?</h1>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Grid />
      </div>
    </div>
  )
}

export default App
