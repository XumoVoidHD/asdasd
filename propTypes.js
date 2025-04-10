import React from 'react';
import PropTypes from 'prop-types';

function UserCard({ name, age, isAdmin, hobbies, address, onClick, role }) {
    return (
        <div>
            <h2>{name} ({role})</h2>
            <p>Age: {age}</p>
            <p>Status: {isAdmin ? "Admin" : "User"}</p>
            <p>Hobbies: {hobbies.join(', ')}</p>
            <p>Address: {address.city}, {address.country}</p>
            <button onClick={onClick}>Click Me</button>
        </div>
    );
}



UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    isAdmin: PropTypes.bool,
    hobbies: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string
    }),
    onClick: PropTypes.func,
    role: PropTypes.oneOf(['admin', 'user', 'guest']) // restrict to specific values
};

UserCard.defaultProps = {
    age: 18,
    isAdmin: false,
    hobbies: ['Reading'],
    address: {
        city: 'Unknown',
        country: 'Nowhere'
    },
    onClick: () => alert("Button clicked"),
    role: 'guest'
};




import React from 'react';
import UserCard from './UserCard';

function App() {
    return (
        <div>
            <UserCard 
                name="Alice"
                age={25}
                isAdmin={true}
                hobbies={['Coding', 'Gaming']}
                address={{ city: 'New York', country: 'USA' }}
                role="admin"
                onClick={() => alert("Hello from Alice!")}
            />
        </div>
    );
}

export default App;
