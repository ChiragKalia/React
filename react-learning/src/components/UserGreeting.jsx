// Example of Conditional Rendering in React

import './css/UserGreeting.css'

import PropTypes from 'prop-types'

const UserGreeting = ({ isLoggedIn = false, userName = "Chirag" }) => {
  return (
    <div>
        {isLoggedIn ? <h2 className='welcome-message'>Welcome back, {userName}!</h2> : <h2 className='login-prompt'>Please log in to continue.</h2>}
    </div>
  )
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string
}

export default UserGreeting