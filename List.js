import React from 'react'

function List() {
    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 16 },
        { id: 3, name: "Charlie", age: 28 }
    ];

    return (
        <div>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>
                        Their name is {user.name} and they are {user.age} years old.
                    </li>
                ))}
            </ul>

            <ul>
            {users.filter(user=>user.age>=18).map(user=>(
                <li key={user.id}>
                    Their name is {user.name} and they are {user.age} years old.
                </li>
            ))}
            </ul>

            
        </div>
    )
}

export default List