import Image from 'next/image'
import React from 'react'

export default function Imagetext({ imgSrc }) {
    return (
        <>
            <Image
         
                src={imgSrc}
                fill
                sizes="100vw"
                style={{ objectFit: "cover", 'z-index' : '-10',"opacity": "0.8" }}
                alt="Picture of the author"
            />
        </>
    )
}
