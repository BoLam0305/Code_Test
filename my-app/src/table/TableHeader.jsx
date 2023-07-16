import { React, useState } from 'react'
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

export const TableHeader = ({ columns, onClick }) => {

    const default_style = { color: "rgb(203 213 225)" };
    const handleClick = (event) => {
        onClick(event.target.id);
    };
    return (
        <thead className='sm:mx-0 sm:h-10 sm:w-10'>
            <tr>
                {columns.map(({ label, accessor, sortable }) => {
                    return (
                        <th className=' hover:cursor-pointer'
                            id={accessor}
                            key={accessor}
                            onClick={handleClick}>
                            <div className='flex'>
                                <div className='flex justify-center items-center text-center'>{label}</div>
                                <div className='flex flex-col justify-center items-center'>
                                    <FaCaretUp id={accessor + '_up'} style={default_style}></FaCaretUp>
                                    <FaCaretDown id={accessor + '_down'} style={default_style}></FaCaretDown>
                                </div>
                            </div>

                        </th>
                    );
                })}
            </tr>
        </thead>
    )
}
