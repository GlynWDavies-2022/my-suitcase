import Item from './Item';

function PackingList({ items }) {
    return (
        <ul className='packing-list'>
            {items.map((item) => (
                <Item item={item} key={item.id} />
            ))}
        </ul>
    );
}

export default PackingList;
