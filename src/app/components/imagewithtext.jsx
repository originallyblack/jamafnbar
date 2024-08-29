import Image from 'next/image'
import React from 'react'

export default function Imagetext({ imgSrc }) {
    return (
        <>
            <Image
                src={imgSrc}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                alt="Picture of the author"
            />
        </>
    )
}
