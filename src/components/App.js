
// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App

// my code

import React from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);

  // Function to handle button click
  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Button Counter</h2>
      <p>Button clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default ButtonCounter;
