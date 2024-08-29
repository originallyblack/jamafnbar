'use client'
import React from 'react'
import ItemCard from './itemCard'

export default function Grid({items}) {
 if (items.length === 0) {
    return ( <div className="text-center mt-9 mb-24"> Click a Option to view menu </div>)
 }
   
    return (
        <div className='w-screen items-center justify-center flex flex-col'>
            {items && items.map((item, index) => <ItemCard key={index} item={item} />)}
        </div>
    )
}
