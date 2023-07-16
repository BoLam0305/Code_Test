import { React, useState, useEffect } from 'react'
import axios from 'axios';
import TableBody from './TableBody';
import { TableHeader } from './TableHeader';
import { sortByName } from './sort_service/SortbyName';
import { sortByUserName } from './sort_service/SortByUserName';
import { sortByEmail } from './sort_service/SortByEmail';
import { sortByPhone } from './sort_service/SortByPhone';
import { filterByName } from './filter_service/FilterByName';
import { filterByEmail } from './filter_service/FilterByEmail';
import { filterByPhone } from './filter_service/FilterByPhone';
import TableSearching from './TableSearching';

const TableMain = () => {
    const [jsonData, setJsonData] = useState([]);

    const [sortByNameToggle, setSortByNameToggle] = useState(false);
    const [sortByEmailToggle, setSortByEmailToggle] = useState(false);
    const [sortByPhoneToggle, setSortByPhoneToggle] = useState(false);
    const [styleToggle, setStyleToggle] = useState(false);

    const [tableData, setTableData] = useState([]);

    const handleInputChange = (keyWord, option) => {
        setTableData(jsonData);
        if(option==="name"){
            setTableData(filterByName(jsonData, keyWord));
        }else if(option==="email"){
            setTableData(filterByEmail(jsonData, keyWord));
        }else{
            setTableData(filterByPhone(jsonData, keyWord));
        }
    };


    const handleChildClick = (id) => {
        if (id === "name") {
  
            setTableData(sortByName(tableData, sortByNameToggle));
            setSortByNameToggle(!sortByNameToggle);
        } else if (id === "email") {
            setTableData(sortByEmail(tableData, sortByEmailToggle));
            setSortByEmailToggle(!sortByEmailToggle);
        } else {
            setTableData(sortByPhone(tableData, sortByPhoneToggle));
            setSortByPhoneToggle(!sortByPhoneToggle);
        }

    };

    const columns = [
        { label: "Name", accessor: "name" },
        { label: "Email", accessor: "email" },
        { label: "Phone", accessor: "phone" }
    ];

    //Get data from url
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setJsonData(response.data);
            setTableData(response.data);
        } catch (error) {
            console.error(error);
            // Handle the error
        }
    };

    return (
        <>
            <TableSearching onInput={handleInputChange} ></TableSearching>
            <table className="table">
                <TableHeader columns={columns} onClick={handleChildClick} />
                <TableBody columns={columns} tableData={tableData} />
            </table>
        </>
    )
}

export default TableMain