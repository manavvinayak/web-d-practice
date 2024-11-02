<<<<<<< HEAD
import React, { useState } from 'react';
import '.app.css';

function App() {
  const [message, setMessage] = useState("Hello, World!");

  const changeMessage = () => {
    setMessage("You clicked the button!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <button onClick={changeMessage}>Click Me</button>
      </header>
    </div>
  );
}

=======
import React, { useState } from 'react';
import '.app.css';

function App() {
  const [message, setMessage] = useState("Hello, World!");

  const changeMessage = () => {
    setMessage("You clicked the button!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <button onClick={changeMessage}>Click Me</button>
      </header>
    </div>
  );
}

>>>>>>> 509c44cfa4bd97c4d8ea72bf4787e6b6575bbd8d
export default App;