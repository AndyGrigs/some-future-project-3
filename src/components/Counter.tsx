import React, { useState } from "react";
import '../style.scss'

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
     <h1>{count}</h1>
      <button onClick={()=> setCount(count + 1)}>Counter</button>
    </div>
  );
}
