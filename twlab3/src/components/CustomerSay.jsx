import React from 'react'

function CustomerSay() {
    return (
        <div className="relative w-full  bg-gray-100">
            <img
                src="https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2Fb065d811-70a9-454e-947e-699ec2801a37%2FScreen_Shot_2023-11-26_at_11.01.17_AM_cleanup.png?table=block&id=fff185a2-dff1-8155-8342-ca7bab2c8a64&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=1420&userId=&cache=v2"
                alt="Home Screen"
                className="w-full h-screen  bg-gray-100"
            />
            <div className="absolute top-0 left-0 w-full h-[100vh] flex flex-col items-start justify-evenly bg-black bg-opacity-50 text-white text-lg p-4">
                <div className='ml-4 h-[100%] w-[100%] flex flex-col items-center justify-center '>

                    <div className="flex flex-col items-center justify-center h-screen ">
                        <h1 className="text-4xl font-bold text-center mb-4 text-white">What our customers say</h1>
                        <p className="text-center mb-8 px-4 text-white">Share a real testimonial that hits some of your benefits (but isn't too sales-y).</p>

                        <div className="flex flex-col items-center">
                            <img
                                src="https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F587152f7-471a-4914-8660-580bfcfd35ca%2FUntitled.png?table=block&id=fff185a2-dff1-8184-9982-d376bb0c2dc1&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=200&userId=&cache=v2"
                                alt="Profile"
                                className="w-32 h-32 rounded-full border-4 border-gray-300 mb-2"
                            />
                            <h2 className="text-xl font-semibold mb-2 text-center">REAL NAME <br />Location</h2>
                            <div className="flex space-x-1">
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-yellow-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 15.27L16.18 19 14.54 12.97 20 8.24l-6.91-.59L10 2 8.91 7.65 2 8.24l5.46 4.73L3.82 19z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerSay