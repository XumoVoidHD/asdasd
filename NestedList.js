import React from 'react'

function NestedList() {
    const categories = [
        {
            name: "Fruits",
            items: ["Apple", "Cherry", "Banana"]
        },
        {
            name: "Fruits",
            items: ["Apple", "Banana", "Cherry"]
        },
        {
            name: "Vegetables",
            items: ["Carrot", "Broccoli", "Spinach"]
        }
    ];

    const styles = {
        color: "blue",
        fontSize: "20px",
        textAlign: "left"
    };

    return (
        <div>
            <ol style={styles}>
                {categories.filter(c => c.name === "Fruits").map(c => (<li style={styles} key={c.name}>
                    <h4>{c.name}</h4>
                    <ul style={styles}>
                        {c.items.sort().map(a => (<li style={styles} key={a}>
                            {a}
                        </li>))}
                    </ul>
                </li>))}
            </ol>
        </div>
    )

    return (
        <div>
            <ol>
                {categories.filter(c=> c==="Fruits").map(c => (<li key={c.name}>{c.name}
                    <ul key={c.items}>
                        {c.items.sort().map(a => (<li key={a}>{a}</li>))}
                    </ul>
                </li>))}
            </ol>
        </div>
    )
}

export default NestedList