import { React, useState } from 'react'
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

export const TableHeader = ({ columns, onClick }) => {
    const toggleStyle = { color: "black", fontSize: "1.5em" }
    const handleClick = (event) => {
        onClick(event.target.id);
        
    };
    return (
        <thead>
            <tr>
                {columns.map(({ label, accessor, sortable }) => {
                    return (
                        <th
                            id={accessor}
                            key={accessor}
                            onClick={handleClick}>
                            {label}
                            <div>
                                <FaCaretUp id={accessor+'_up'} style={toggleStyle}></FaCaretUp>
                                <FaCaretDown id={accessor+'down'} style={toggleStyle}></FaCaretDown>
                            </div>
                        </th>
                    );
                })}
            </tr>
        </thead>
    )
}
