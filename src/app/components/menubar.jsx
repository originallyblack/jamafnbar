
"use client"
import React, { useState } from 'react';
import data from '../data/menu.json'
import { menu } from '../data/hq.json'
import Grid from './grid'
export default function Menubar() {
    const [searchKey, setSearchKey] = useState('');
    const [results, setResults] = useState([]);
    const menuHeading = Object.keys(data.menu)
    const handleSearch = (item) => {
        const key = Object.keys(data.menu).find(
            (menuKey) => menuKey.toLowerCase() === item.toLowerCase()
        )
        if (key) {
            setResults(data.menu[key]);
        } else {
            setResults([]);
        }
    };


    return (
        <>  <div className='bg-black mt-2 h-11 w-screen flex flex-row items-center  justify-center overflow-y-hidden shadow-lg'>

            {menuHeading.map((item, index) =>
            (
                <div onClick={() => (handleSearch(item))} className='w-auto p-2 cursor-pointer hover:bg-lime-400  text-sm' key={index}>{item}</div>)
            )}


        </div>
            <Grid items={results} />
        </>

    )
}
