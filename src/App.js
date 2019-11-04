import React, { useState, useEffect } from 'react'
import ShowLaps from './ShowLaps'
import ShowTime from './ShowTime'
import Button from './Button'

function App () {
  const [lapsNumber, setLapsNumber] = useState(0) // Initial Laps Number
  const [running, setRunning] = useState(false)
  const [time, setTime] = useState(0)

  useEffect(() => {
    let timer = null

    if (running) {
      timer = setInterval(() => {
        setTime(old => old + 1)
      }, 1000)
    }
    return () => {
      if (timer) { // truthy or != null
        clearInterval(timer)
      }
    }
  }, [running])

  const toggleRunning = () => {
    setRunning(!running)
  }

  const increment = () => {
    setLapsNumber(lapsNumber + 1)
  }

  const decrement = () => {
    if (lapsNumber > 0) {
      setLapsNumber(lapsNumber - 1)
    }
  }

  const reset = () => {
    setLapsNumber(0)
    setTime(0)
  }

  return (
    <div>
      <ShowLaps laps={lapsNumber} />

      <Button onClick={increment} text='+' />
      <Button onClick={decrement} text='-' />
      {
        lapsNumber > 0 &&
          <ShowTime time={Math.round(time / lapsNumber)} />
      }
      <Button onClick={toggleRunning} text='Start' />
      <Button onClick={reset} text='Restart' />
    </div>
  )
}

export default App
