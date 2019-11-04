import React, { useState, useEffect } from 'react'

const ShowLaps = (props) => {
  return (
    <p>
      {props.laps} <br />
      Laps
    </p>
  )
}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const ShowTime = (props) => {
  const time = props.time
  const minutes = parseInt(time / 60)
  const seconds = time % 60
  const minutesStr = minutes < 10 ? '0' + minutes : minutes
  const secondsStr = seconds < 10 ? '0' + seconds : seconds

  return (
    <p>
      {`${minutesStr}:${secondsStr}`}
      <br />
      Average time lap
    </p>
  )
}

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
