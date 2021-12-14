import { useState } from 'react';

const Shopping = () => {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");

    const addItem = event => {
        event.preventDefault();
        setItems([...items, { id: items.length, name: itemName }]);
        setItemName("");
    }

    return (
        <>
            <form onSubmit={addItem}>
                <input type="text" name="item" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                <button type="submit"> Add Item </button>
            </form>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    );
}

export default Shopping;