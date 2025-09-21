import React from "react";
import Products from "./components/Products";
import Users from "./components/Users";

function App() {
  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>React Costom Hooks Demo</h1>
      <Products />
      <hr />
      <Users />
    </div>
  );
}

export default App;
