import React, { useState } from "react";
export default function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <Child />
    </div>
  );
}
function Child() {
  console.log("Child Component Rendered");
  return (
    <div>
      <h2>Child Component</h2>
    </div>
  );
}
