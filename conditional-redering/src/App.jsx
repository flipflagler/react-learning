import React from "react";
import { useState } from "react";

const App = () => {
  const [showbtn, setShowbtn] = useState(true);
  const [todo, setTodo] = useState([
    {
      title: "Todo List",
      item1: "Learn React",
      item2: "Learn JavaScript",
      item3: "Learn CSS",
    },  
    {      title: "Grocery List",
      item1: "Milk",
      item2: "Eggs",
      item3: "Bread",},
    {      title: "Chores",
      item1: "Clean the house",
      item2: "Do the laundry",
      item3: "Cook dinner",}, 

  ]);

  
 const Todo = (props) => {
  return (
    <>
      <div
        style={{
          borderRadius: "5px",
          padding: "1rem",
          margin: "1rem",
          width: "300px",
          alignItems: "center",
          backgroundColor: "#f9f9f9",
          color: "#0c0101",
        }}
      >
        <h1 style={{ color: "black" }}>{props.title}</h1>
        <ul>
          <li>{props.item1}</li>
          <li>{props.item2}</li>
          <li>{props.item3}</li>
        </ul>
      </div>
    </>
  );
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        {showbtn ? <p>Welcome back!</p> : <p>Please log in.</p>}
        <button onClick={() => setShowbtn(!showbtn)} style={{ margin: 16 }}>
          {" "}
          {showbtn ? "Log out" : "Log in"}
        </button>
        {todo.map((item, index) => (
          <Todo key={index} title={item.title} item1={item.item1} item2={item.item2} item3={item.item3} />
        ))}
      </div>
    </>
  );
};

export default App;
