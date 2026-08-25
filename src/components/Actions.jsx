function Actions({ sortBy, setSortBy, items, setItems }) {
    let sortedItems = items;

    if (sortBy === 'input') sortedItems = { items };

    if (sortBy === 'description') sortedItems.sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === 'packed') sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed));

    return (
        <div className='actions'>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value='input'>Sort by input order</option>
                <option value='description'>Sort by description</option>
                <option value='packed'>Sort by packed status</option>
            </select>
            <button className='clear' onClick={() => setItems([])}>
                Clear List
            </button>
        </div>
    );
}

export default Actions;
