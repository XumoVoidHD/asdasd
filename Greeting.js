import React from 'react';
import PropTypes from 'prop-types'; // ✅ Import PropTypes

function Greeting({ name, age }) {
    return <h1>Hello, {name}! You are {age} years old.</h1>;
}

// ✅ Apply PropTypes validation
Greeting.propTypes = {
    name: PropTypes.string.isRequired, // name must be a string and required
    age: PropTypes.number, // age must be a number
};

// ✅ Apply default props (if props are missing)
Greeting.defaultProps = {
    name: "Guest",
    age: 20,
};

export default Greeting;
