import React, { useState } from "react";

function StateHook(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Oprime aqui</button>
    </div>
  );
}

export default StateHook;
