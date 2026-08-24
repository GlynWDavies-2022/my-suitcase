function Item({ item, onDeleteItem }) {
    return (
        <li className='item'>
            <input type='checkbox'></input>
            <span className='quantity'>{item.packed ? '0' : item.quantity}</span>
            <span className={`description ${!item.packed ? '' : 'packed'}`}>{item.description}</span>
            <button className='delete'>
                <span onClick={() => onDeleteItem(item.id)}>❌</span>
            </button>
        </li>
    );
}

export default Item;
