//Example on handling buttonClick events in React.

import './Button.css'

const Button = () => {

    let count = 0;
    const handleClick = (e) => {
       count < 3 ? e.target.innerText = `you clicked me ${++count} times` : e.target.innerText = "Stop Clicking me 🤬🤬🤬";        
    }

    return (
        <>
            <button onClick={(e)=> handleClick(e)}>Click Me 😊</button>
        </>

    )
}

export default Button