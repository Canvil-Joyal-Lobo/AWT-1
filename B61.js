import React, { useState, useEffect } from "react"; 
function App() { 
 const [users, setUsers] = useState([]); 
 const [name, setName] = useState(""); 
 useEffect(function () { 
 fetchUsers(); 
 }, []); 
 function fetchUsers() { 
 fetch("https://67a1bf3b5bcfff4fabe34c24.mockapi.io/students/users")  .then(function (response) { 
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
