import React from 'react'

function Navbar({ img }) {
    return (
        <div className='w-screen bg-black flex justify-between p-5 items-center' style={{ height: "10%" }}>
            <p className='text-white text-lg'>Ikigai</p>
            <div className="dropdown dropdown-end">
                <img src={img} className='rounded-full w-10 h-10' role='button' tabIndex={0} />
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar