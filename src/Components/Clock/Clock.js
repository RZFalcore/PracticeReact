import React, { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, [time]);

  return <p>Current time: {time.toLocaleTimeString()}</p>;
}
