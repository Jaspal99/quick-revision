import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1); // all updates value by 1, instead of 3
  }

  function handleBatchClick() {
    setCount(c => c + 1);
    setCount(c => c + 1);
    setCount(c => c + 1); // updates value by 3, because we are using the previous value
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleBatchClick}>Batch Increment</button>
    </div>
  );
}
