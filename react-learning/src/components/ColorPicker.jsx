// Example of a Color Picker component in React
// Demonstrates useState and handling input change events
// 
import React, {useState} from 'react'
import './css/ColorPicker.css'

const ColorPicker = () => {

    const [color, setColor] = useState('#FFFFFF');   
    return (
    <div className='color-picker-container'>
        <h1>Color Picker</h1>
        <div className='color-display' style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>        
        </div>
        <label>Select Color:</label>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} /> 
    </div>
    )
}

export default ColorPicker