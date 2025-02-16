"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
