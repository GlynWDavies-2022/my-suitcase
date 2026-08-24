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
];

function App() {
    const [items, setItems] = useState(initialItems);

    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    return (
        <>
            <Header />
            <Form onAddItems={handleAddItems} items={items} />
            <PackingList items={items} onDeleteItem={handleDeleteItem} />
            <Statistics />
        </>
    );
}

export default App;

