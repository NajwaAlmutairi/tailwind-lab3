import React from 'react'

function home() {
    return (
        <>
            <div className="relative w-full">
                <img
                    src="https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png?table=block&id=fff185a2-dff1-81af-bc73-de1e521c36bc&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=2000&userId=&cache=v2"
                    alt="Home Screen"
                    className="w-full h-screen"
                />
                <div className="absolute top-0 left-0 w-full h-[100vh] flex flex-col items-start justify-evenly bg-black bg-opacity-50 text-white text-lg p-4">
                    <div className='ml-4 h-[100%] w-[100%] flex flex-col items-start justify-evenly '>
                        <p className='text-1xl'>FreshGoods</p>
                        <h1 className='text-5xl'>Concisely <br />
                            describe your <br />
                            product or service <br />
                        </h1>
                        <p className='my-4'>No need to get clever. Tell people exactly what you're offering,<br />
                            then use this space to communicate your key value proposition.
                        </p>
                        <button className='py-3 px-7 font-bold text-black bg-amber-400'>ORDER NOW</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default home