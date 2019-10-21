import React, { useState } from 'react'




const ShowLaps = (props) => {
  return (
    <p>
      {props.laps} <br />
      Laps
    </p>
  )
}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const ShowTime = () => {
  return (
    <p>
      01:30<br />
      Average time lap
    </p>
  )
}

function App() {
  const [lapsNumber, setLapsNumber] = useState(0) //Initial Laps Number

  const increment = () => {
    setLapsNumber(lapsNumber + 1)
  }

  const decrement = () => {
    if (lapsNumber > 0) {
      setLapsNumber(lapsNumber - 1)
    }
  }

  return (
    <div>
      <ShowLaps laps={lapsNumber} />

      <Button onClick={increment} text='+' />
      <Button onClick={decrement} text='-' />

      <ShowTime />
      <Button text='Start' />
      <Button text='Restart' />
    </div>
  );
}

export default App
