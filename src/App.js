import React from 'react'

const ShowLaps = () => {
  return (
    <p>
      10 <br />
      Laps
    </p>
  )
}

const Button = ( props) => <button>{props.text}</button>

const ShowTime = () => {
  return (
    <p>
      01:30<br />
      Average time lap
    </p>
  )
}

function App() {
  return (
    <div>
      <ShowLaps />

      <Button text='+'/>
      <Button text='-'/>

      <ShowTime />
      <Button text='Start'/>
      <Button text='Restart'/>
    </div>
  );
}

export default App
