// Example of using updater function in state setter

import {useState} from 'react'

const UpdaterFunction = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        // Using updater function to ensure we get the latest state
        // This is especially useful in scenarios where we use multiple updates
        // in a single function call or when the state update depends on the previous state
        // setCount(count + 1) // This might lead to stale state issues
        // Correct way using updater function
        setCount(prevCount => prevCount + 1)
        // setCount(prevCount => prevCount + 1) // Uncommenting this will increment by 2
        // If you were to use setCount(count + 1) twice, it would still only increment by 1
        // because 'count' would be the same value in both calls
    }

    return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
    </div>
    )
}

export default UpdaterFunction