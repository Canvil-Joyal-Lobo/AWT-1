

//App.js
import React from 'react';
import Button from './Button';
import './App.css'; 
function App() {
return (
<div className="App">
<h1>Button Click Tracker</h1>
<Button buttonId={1} />
<Button buttonId={2} />
<Button buttonId={3} />
</div>
);
}
export default App;


//Button.js
import React, { useState } from 'react';
import './App.css'; 
const Button = ({ buttonId }) => {
const [clickCount, setClickCount] = useState(0);
const handleClick = () => {
setClickCount(clickCount + 1);
alert(`Button ${buttonId} was clicked!`);
};
return (
<div>
<button onClick={handleClick}>
Button {buttonId} (Clicked {clickCount} times)
</button>
</div>
);
};
export default Button;


/* App.css */

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    }
    
    .App {
    text-align: center;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    }
    
    h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
    }
    
    button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    font-size: 16px;
    cursor: pointer;
    }