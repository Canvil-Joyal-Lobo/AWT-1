//4.js

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './App.css';
function App() {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const handleClick = () => {
if (firstName === "" || lastName === "") {
alert("Please fill out both fields.");
} else {
alert(`Hello ${firstName} ${lastName}`);
}
};
return (
<div>
<h1>Enter Your Name</h1>
<TextField
label="First Name"
variant="outlined"
value={firstName}
onChange={(e) => setFirstName(e.target.value)}
/><br></br>
<TextField
label="Last Name"
variant="outlined"
value={lastName}
onChange={(e) => setLastName(e.target.value)}
/><br></br><br></br>
<Button variant="contained" color="primary" onClick={handleClick}>
Submit
</Button>

</div>

);
}
export default App;


//css
/* App.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
  
  div {
  
    padding: 20px;
    
    text-align: center;
    width: 300px;
  }
  
  h1 {
    color: #333;
    margin-bottom: 20px;
  }
  
  .MuiTextField-root {
    margin-bottom: 15px;
    width: 100%;
  }
  
  .MuiButton-root {
    width: 100%;
  }
  