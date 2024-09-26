import React from 'react'

function Card({ img, title, text }) {
    return (
        <>
            <div className="flex flex-col items-center text-center p-6 ">
                <div className="mb-4">
                    <img src={img} alt={title} className="w-16 h-16" />
                </div>
                <h2 className="font-semibold text-xl mb-2">{title}</h2>
                <p className="text-black">{text}</p>
            </div>
        </>
    )
}

export default Card