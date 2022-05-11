import React, { useEffect, useState } from 'react';

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, [])
  
  return (
    <div style={ {fontSize: "45px", marginTop: "50px"}}>
      Clock
      <p>{clockState}</p>
    </div>
  )
}

export default Clock;