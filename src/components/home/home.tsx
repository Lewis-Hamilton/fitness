import React, { useState } from 'react';

export default function Home() {
  const [duration, setDuration] = useState(60);

  const timer = () => {
    if (duration <= 60) {
      setInterval(() => {
        setDuration((duration) => duration - 1);
      }, 1000);
    }
  };

  return (
    <>
      <p>{duration}</p>
      <button onClick={timer}>Start</button>
    </>
  );
}
