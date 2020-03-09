import React, { useState } from 'react';

function useRandom() {
  const [random, setRandomNumber] = useState(0);

  const setRandom = (min = 10, max = 20) => {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(min, max);
    setRandomNumber(num);
  };
  return [random, setRandom];
}

export default useRandom;
