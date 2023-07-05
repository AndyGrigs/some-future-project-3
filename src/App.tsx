import React from 'react'
import './index.scss'
import { Counter } from './components/Counter'

const App = () => {
  return (
    <div className='app'>
        <div className="patience">
            <p>Patience is the ability to wait calmly in the face of frustration or adversity.</p>
        </div>
        <Counter/>
    </div>
  )
}

export default App