import Item from './Item';

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

function PackingList() {
    return (
        <ul className='packing-list'>
            {initialItems.map((item) => (
                <Item item={item} key={item.id} />
            ))}
        </ul>
    );
}

export default PackingList;
