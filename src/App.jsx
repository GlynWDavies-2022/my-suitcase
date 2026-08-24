import { useState } from 'react';

import Form from './components/Form';
import Header from './components/Header';
import PackingList from './components/PackingList';
import Statistics from './components/Statistics';
import './App.css';

const initialItems = [
    { id: 1, description: 'Passport', quantity: 2, packed: false },
    { id: 2, description: 'Toothpaste', quantity: 1, packed: false },
    { id: 3, description: 'Toothbrush', quantity: 1, packed: false },
    { id: 4, description: 'Razor', quantity: 1, packed: false },
    { id: 5, description: 'Shaving Cream', quantity: 1, packed: false },
    { id: 6, description: 'T-Shirt', quantity: 5, packed: false },
    { id: 7, description: 'Shorts', quantity: 5, packed: false },
    { id: 8, description: 'Socks', quantity: 5, packed: false },
    { id: 9, description: 'Sneakers', quantity: 1, packed: false },
    { id: 10, description: 'Phone', quantity: 1, packed: false },
    { id: 11, description: 'Charger', quantity: 1, packed: false },
    { id: 12, description: 'Laptop', quantity: 1, packed: false },
];

function App() {
    const [items, setItems] = useState([]);

    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }

    return (
        <>
            <Header />
            <Form onAddItems={handleAddItems} />
            <PackingList items={items} />
            <Statistics />
        </>
    );
}

export default App;

