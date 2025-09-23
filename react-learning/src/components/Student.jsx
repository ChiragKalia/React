//Example of a functional component with props and default values

import './Student.css'
import PropTypes from 'prop-types'

const Student = ({ name = "Unknown", age = 0, isStudent = false }) => {
  return (
    <div className='student'>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
}

export default Student