import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  // you can define ButtonCounter here as an inner function
  const ButtonCounter = () => {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Button clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <ButtonCounter />
    </div>
  );
};

// ✅ export must be at the top level, NOT inside the function
export default App;
