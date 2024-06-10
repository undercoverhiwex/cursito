import {useState} from 'react';

export const useCounter = (initialValue?: number) => {
  const [counter, setCounter] = useState(initialValue ?? 0);

  const increment = () => {
    setCounter(ct => ct + 1);
  };

  const decrement = () => {
    setCounter(ct => ct - 1);
  };

  return {
    counter,
    increment,
    decrement,
  };
};
