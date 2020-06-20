import React, { useEffect, useState } from 'react';
import './App.css';
import Employee from "./employee";

const App = () => {

  const [employees, setEmployees] = useState([]);

useEffect(() => {
  getEmployees()
}, []);

  const getEmployees = async () => {
    const response = await fetch("https://randomuser.me/api/?results=100&nat=us")
    const data = await response.json();
    console.log(data.results);
    setEmployees(data.results);

  }

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {employees.map(employee =>(
        <Employee />
      ))}
    </div>
  );
};

export default App;
