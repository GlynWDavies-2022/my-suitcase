import Item from './Item';

function PackingList({ items, onDeleteItem, onToggleItem }) {
    return (
        <ul className='packing-list'>
            {items.map((item) => (
                <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
            ))}
        </ul>
    );
}

export default PackingList;
