function Statistics({ items }) {
    const numItems = items.length;
    const packedItems = items.filter((item) => item.packed);
    const numItemsPacked = packedItems.length;
    const percentagePacked = Math.round((numItemsPacked / numItems) * 100);

    return (
        <footer className='statistics'>
            {percentagePacked < 100 ? (
                <p>
                    You have {numItems} items on your list. You are{' '}
                    <span style={{ color: '#FF9770' }}>{percentagePacked}%</span> packed now.
                </p>
            ) : (
                <p style={{ color: '#13C4A3' }}>You are packed and ready to go!</p>
            )}
        </footer>
    );
}

export default Statistics;
