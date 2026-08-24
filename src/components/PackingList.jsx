import Item from './Item';

function PackingList({ items, onDeleteItem }) {
    return (
        <ul className='packing-list'>
            {items.map((item) => (
                <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />
            ))}
        </ul>
    );
}

export default PackingList;
