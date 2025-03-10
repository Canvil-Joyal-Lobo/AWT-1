
//b6.js

import React, { useState, useEffect } from "react"; 
function App() { 
 const [users, setUsers] = useState([]); 
 const [name, setName] = useState(""); 
 useEffect(function () { 
 fetchUsers(); 
 }, []); 
 function fetchUsers() { 
 fetch("https://67a1bf3b5bcfff4fabe34c24.mockapi.io/students/users").then(function (response) { 
 return response.json(); 
 }) 
 .then(function (data) { 
 setUsers(data); 
 }) 
 .catch(function (error) { 
 console.error("Error fetching users:", error); 
 }); 
 } 
 function handleInputChange(event) { 
 setName(event.target.value); 
 } 
 function addUser() { 
 if (name.trim() === "") {
 alert("Name cannot be empty"); 
 return; 
 } 
 fetch("https://67a1bf3b5bcfff4fabe34c24.mockapi.io/students/users",  { 
 method: "POST", 
 headers: { 
 "Content-Type": "application/json", 
 }, 
 body: JSON.stringify({ name: name }), 
 }) 
 .then(function (response) { 
 return response.json(); 
 }) 
 .then(function (newUser) { 
 setUsers(function (prevUsers) { 
 return prevUsers.concat(newUser); 
 }); 
 setName(""); 
 }) 
 .catch(function (error) { 
 console.error("Error adding user:", error); 
 }); 
 } 
 function deleteUser(id) { 
 fetch("https://67a1bf3b5bcfff4fabe34c24.mockapi.io/students/users/"  + id, { 
 method: "DELETE",
 }) 
 .then(function () { 
 setUsers(function (prevUsers) { 
 return prevUsers.filter(function (user) {  return user.id !== id; 
 }); 
 }); 
 }) 
 .catch(function (error) { 
 console.error("Error deleting user:", error);  }); 
 } 
 return ( 
 <div className="app"> 
 <h1>User Management</h1> 
 <div className="add-user"> 
 <input 
 type="text" 
 placeholder="Enter name" 
 value={name} 
 onChange={handleInputChange} 
 /> 
 <button onClick={addUser}>Add User</button>  </div> 
 <ul className="user-list"> 
 {users.map(function (user) { 
 return (
 <li key={user.id}> 
 {user.name} 
 <button onClick={function () { deleteUser(user.id);  }}>Delete</button> 
 </li> 
 ); 
 })} 
 </ul> 
 </div> 
 ); 
} 
export default App;

//////////////////////////////////












































//src/Compomets/ItemList.js
import React, { useState, useEffect } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);  // Initialize with an empty list
  const [newItem, setNewItem] = useState('');

  // Fetch items from the mock backend (optional if backend has data)
  const fetchItems = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    setItems(data.slice(0, 0)); // Ensure empty array on initial fetch
  };

  // Handle adding a new item
  const addItem = async () => {
    if (newItem.trim()) {
      const newTodo = {
        title: newItem,
        completed: false,
      };

      // POST the new item to the backend (mocking the backend response)
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });

      const addedItem = await response.json();
      setItems([addedItem, ...items]);  // Add the new item to the list
      setNewItem('');
    }
  };

  // Handle deleting an item
  const deleteItem = async (id) => {
    // DELETE the item from the backend
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    });

    // Update the state after deletion
    setItems(items.filter(item => item.id !== id));  // Remove item locally
  };

  useEffect(() => {
    fetchItems();  // Fetch the items when the component mounts (optional for empty list)
  }, []);

  return (
    <div>
      <h2>Item Management</h2>
      
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter new item"
        />
        <button onClick={addItem}>Add Item</button>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <button className="delete" onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

//App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  // Fetch items from the mock backend
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch('http://localhost:5000/items');
    const data = await response.json();
    setItems(data);
  };
  

  const addItem = async () => {
    if (newItem.trim()) {
      const newItemData = { name: newItem };

      // POST the new item to the mock backend
      const response = await fetch('http://localhost:5000/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItemData),
      });

      const addedItem = await response.json();
      setItems([...items, addedItem]); // Add the new item to the frontend
      setNewItem(''); // Clear the input
    }
  };

  const deleteItem = async (id) => {
    // DELETE the item from the mock backend
    await fetch(`http://localhost:5000/items/${id}`, {
      method: 'DELETE',
    });

    // Remove the item from the frontend
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Item Management</h1>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter new item"
        />
        <button onClick={addItem}>Add Item</button>
      </div>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button className="delete" onClick={() => deleteItem(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

//App.css
.App {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

h1 {
  color: #333;
}

input {
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
}

button {
  padding: 10px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button.delete {
  background-color: #f44336;
}

button.delete:hover {
  background-color: #d32f2f;
}

//db.json
{
  "items": [
    {
      "id": "1",
      "name": "Item 1"
    },
    {
      "id": "2",
      "name": "Item 2"
    },
    {
      "id": "3",
      "name": "Item 3"
    }
  ]
}

//package.json
{
  "name": "react-items-app",
  "version": "1.0.0",
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "json-server": "^0.16.3"
  },
  "scripts": {
    "start": "react-scripts start",
    "server": "json-server --watch db.json --port 5000"
  }
}
