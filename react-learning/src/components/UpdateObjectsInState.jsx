// Example of updating objects in state.

import React, {useState} from 'react'

const UpdateObjectsInState = () => {
    const [car, setcar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: 1964
    });
    const updateBrand = (e) => {
        // Incorrect way: This will replace the entire car object
        // setcar({brand: "Honda"});
        // Correct way: Use the spread operator to copy the existing properties
        setcar(prevCar => ({
            ...prevCar,
            brand: e.Target.value
        }));
    }       

    const updateModel = (e) => {
        setcar(prevCar => ({
            ...prevCar,
            model: e.Target.value
        }));
    }
    
    const updateYear = (e) => {
        setcar(prevCar => ({
            ...prevCar,
            year: e.Target.value
        }));
    }


    return (
    <div>
        <h2>Your favourite car is: {car.brand} {car.model} {car.year}</h2>
        <input type="text" value={car.brand} onChange={(e) => updateBrand(e)} />
        <br />
        <input type="text" value={car.model} onChange={(e) => updateModel(e)} />
        <br />
        <input type="number" value={car.year} onChange={(e) => updateYear(e)} />
    </div>
    )
}

export default UpdateObjectsInState