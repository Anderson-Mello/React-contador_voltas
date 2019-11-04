import React from 'react'

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

export default ShowTime
