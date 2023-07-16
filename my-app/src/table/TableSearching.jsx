import { React, useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const TableSearching = ({ onInput }) => {
    const [filterValue, setFilterValue] = useState('name');

    const options = [
        { value: 'name', label: 'Name' },
        { value: 'email', label: 'Email' },
        { value: 'phone', label: 'Phone' }
    ]
    const defaultOption = options[0].value;

    const handleChange = (event) => {
        console.log(event.value);
        setFilterValue(event.value);
    }
    const handleInput = (event) => {
        const inputValue = event.target.value;
        console.log(filterValue);
        onInput(inputValue, filterValue);
    };
    return (
        <div className='flex w-full mx-auto'>
            <input className='p-2 mr-2 mb-2 border-2 border-slate-300' type="text" onInput={handleInput} placeholder="Type something..." />
            <Dropdown  onChange={handleChange} value={defaultOption} options={options} placeholder="Select an option" />
        </div>
    )
}

export default TableSearching