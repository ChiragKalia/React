// Example of handling onChange event in React

import { useState } from 'react';

const OnChangeEventExample = () => {

  const [name, setName] = useState("Guest");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <input 
        type="text" 
        value={name} 
        onChange={handleInputChange} 
        placeholder="Enter your name" 
      />
    </div>
  );
}

export default OnChangeEventExample