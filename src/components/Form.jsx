function Form() {
    return (
        <form className='form'>
            <label>What do you need for your trip?&nbsp;</label>
            <select className='quantity'>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input className='item' type='text' placeholder='Item...' />
            <button className='add'>Add</button>
        </form>
    );
}

export default Form;
