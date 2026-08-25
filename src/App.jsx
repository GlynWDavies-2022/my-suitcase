import { useState } from 'react';

import Actions from './components/Actions';
import Form from './components/Form';
import Header from './components/Header';
import PackingList from './components/PackingList';
import Statistics from './components/Statistics';
import './App.css';

function App() {
    const [items, setItems] = useState([]);
    const [sortBy, setSortBy] = useState('input');

    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }

    function handleToggleItem(id) {
        setItems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
    }

    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    return (
        <>
            <Header />
            <Form onAddItems={handleAddItems} items={items} />
            <Actions sortBy={sortBy} setSortBy={setSortBy} items={items} setItems={setItems} />
            <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
            <Statistics items={items} />
        </>
    );
}

export default App;

