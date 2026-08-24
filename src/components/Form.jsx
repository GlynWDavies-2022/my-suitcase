import { useState } from 'react';

function Form({ onAddItems }) {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        if (!description) return;
        const newId = Math.floor(Math.random() * 10000);
        console.log(newId);
        const newItem = { id: newId, description, quantity, packed: false };
        console.log(newItem);
        onAddItems(newItem);
        setDescription('');
        setQuantity(0);
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label>What do you need for your trip?&nbsp;</label>
            <select className='quantity' value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                className='item'
                type='text'
                placeholder='Item...'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button className='add'>Add</button>
        </form>
    );
}

export default Form;
