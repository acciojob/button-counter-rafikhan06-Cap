import React, { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {/* Display current count dynamically */}
      <p>Button clicked {count} times</p>

      {/* Button with onClick event */}
      <button onClick={handleClick} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Click Me
      </button>
    </div>
  );
}

export default ClickCounter;