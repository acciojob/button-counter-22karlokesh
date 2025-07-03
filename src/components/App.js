
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
  const ButtonCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
        <p>Button clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
   return (
    <div>
      {/* Do not remove the main div */}
      <ButtonCounter />
    </div>
  );
};

export default App;
