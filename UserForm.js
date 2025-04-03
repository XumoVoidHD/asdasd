import React, { useState } from "react";

function UserForm() {
    const [user, setUser] = useState({ name: "", age: "" });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value }); // Update specific field
    };

    return (
        <div>
            <input 
                type="text" 
                name="name"
                placeholder="Enter your name" 
                value={user.name} 
                onChange={handleChange}
            />
            <input 
                type="number" 
                name="age"
                placeholder="Enter your age" 
                value={user.age} 
                onChange={handleChange}
            />
            <h2>Hello, {user.name}! You are {user.age} years old.</h2>
        </div>
    );
}

export default UserForm;
