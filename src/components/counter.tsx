import React from 'react';
import { useState } from 'react';

interface CounterDisplayProps {
  initialCount?: number; // optional prop
}


export default function CounterDisplay({ initialCount = 12 }: CounterDisplayProps) {
  const [count, setCount] = useState(initialCount);


  const Increment = () => {
    setCount((prev) => prev + 1);
  };

  const Decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center p-2 rounded-xl mt-10 w-10 bg-gray-200 text-indigo-900">
          <button className='w-5 h-5 opacity-40 text-blue-700 '  onClick={Increment} >
            <img src='https://api.iconify.design/ant-design:plus-outlined.svg?color=%234782e1'></img>
          </button>
      <div className="my-4  font-bold tabular-nums">{count}</div>
      <div className='w-5 h-5 opacity-40 text-blue-700' onClick={Decrement}>
        <img  src="https://api.iconify.design/ic:baseline-minus.svg?color=%234782e1" ></img></div>

    </div>
  );

}
