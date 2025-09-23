//Example on useState Hook for managing state in a functional component

import { useState } from "react";

const UseStateHookExample = () => {
  const [name, setName] = useState("Guest");
  const [isEmployed, setIsEmployed] = useState(false);
  const handleNameChange = (newName) => {
    setName(newName);
  };

  const toggleEmploymentStatus = () => {
    setIsEmployed(!isEmployed);
  }
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={() => handleNameChange("John Doe")}>Change Name to John Doe</button>
      <p>Employment Status: {isEmployed ? "Employed" : "Unemployed"}</p>
      <button onClick={toggleEmploymentStatus}>Toggle Employment Status</button>

    </div>
  );
};

export default UseStateHookExample;
