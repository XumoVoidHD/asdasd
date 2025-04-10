import React, { useState } from 'react';

function NewForm() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name: name,
            username: username,
        };

        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);

        // Clear input fields
        setName('');
        setUsername('');

        // When 5 users are collected, log them
        if (updatedUsers.length === 5) {
            console.log('Users:', updatedUsers);
            alert('5 users collected! Check console.');
        }
    };

    return (
        <div>
            <h2>User Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <button type="submit">Submit</button>
            </form>

            <h3>Users so far: {users.length}</h3>
        </div>
    );
}

export default NewForm;
