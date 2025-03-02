//Home.js
function Home() {
return <h2>Welcome to the Home Page!</h2>;
}
export default Home;
About.js
function About() {
return <h2>About Us</h2>;
}
export default About;

//Contact.js
function Contact() {
return <h2>Contact Us</h2>;
}
export default Contact;


//Navbar.js
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


//App.js
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import './App.css';
function App() {
return (
<Router>
<div>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</div>
</Router>
);
}
export default App;




/*App.css*/
/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f9fa;
    text-align: center;
  }
  
  /* Navbar Styles */
  nav {
    background-color: #333;
    padding: 15px;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  
  nav ul li {
    margin: 0 15px;
  }
  
  nav ul li a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
  
  nav ul li a:hover {
    color: #17a2b8;
  }
  
  /* Page Styles */
  .container {
    max-width: 800px;
    margin: 50px auto;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Links */
  a {
    text-decoration: none;
    color: #007bff;
  }
  
  a:hover {
    color: #0056b3;
  }
  