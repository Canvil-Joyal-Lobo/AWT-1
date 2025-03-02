//button.js
import React from 'react';
function Button({ label, onClick, st }) {
return (
<button onClick={onClick} style={st}>
{label}
</button>
);
}
export default Button;


//TextBox.js
import React from 'react';
import Dropdown from './Dropdown';
function TextBox({ ph }) {
return (
<input
type="text"
placeholder={ph}
required />
);
}
export default TextBox;

//Dropdown.js

import React from 'react';
function Dropdown({ options }) {
return (
<select>
{options.map((option, index) => (
<option key={index} value={option}>
{option}
</option>
))}
</select>
);
}
export default Dropdown;

//App.js
import React from 'react';
import Button from './button';
import TextBox from './TextBox';
import './App.css';
import Dropdown from './Dropdown';
function App() {
return (
<div>
<h1>Form</h1>
<form>
<div>
<TextBox ph="Enter your name...
" />
</div>
<br></br>
<div>
<Dropdown
options={['MBA'
,
'MCA'
,
'BE']}
/>
</div><br></br>
<div>
<Button
label="Submit"
onClick={() => alert('Form submitted! ')}

st={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white' }}
/>
</div>
</form>
</div>
);
}
export default App;



/* App.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  h1 {
    text-align: center;
    color: #333;
  }
  
  form {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
  }
  
  div {
    margin-bottom: 15px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
  }
  
  button:hover {
    background-color: rgb(0, 139, 42);
  }
  
  input, select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  