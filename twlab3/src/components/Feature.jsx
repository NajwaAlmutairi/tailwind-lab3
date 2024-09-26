import React from 'react'

function Feature({img,title,text}) {
    return (
        <>
            <div className="flex flex-col items-center">
                <img
                    src={img}
                    alt="Image 1"
                    className="w-50 h-50 mb-2 object-cover"
                />
                <h2 className="text-xl font-semibold mb-1">{title}</h2>
                <p className="text-gray-700 text-center">{text}</p>
            </div>

        </>

    )
}

export default Feature