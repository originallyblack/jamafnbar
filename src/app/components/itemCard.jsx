"use client"
import Image from 'next/image'
import React, { useState } from 'react'

export default function ItemCard({ key, item }) {

    return (
        <div key={key} id='itemcard' className='p-3 m-1 flex flex-row w-[360px] h-full bg-emerald-700 shadow-sm'>
            {/* <Image src={"/hero2.png"} width={100} height={100} /> */}
            <div className='px-3'> <div id='itemInfo' className='min-w-[300px] font-bold text-sm flex flex-row justify-between'>
                <div id='itemTitle' className='w-3/4'>{item.name}</div>
                <div id='itemPrice' className='w-1/4 text-center'>£{item.price}</div>
            </div>
                <div id='itemDesc' className='w-full text-xs'>{item.description}</div></div>

        </div>
    )
}
