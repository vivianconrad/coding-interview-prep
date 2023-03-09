import React, { useState } from "react";

function ItemList(props) {
    const [items, setItems] = useState(props.items);

    function handleDelete(index) {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    }

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

