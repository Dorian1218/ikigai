import Image from 'next/image'
import React from 'react'
import { MdPersonOutline, MdOutlineArticle, MdOutlineLogout } from "react-icons/md";
import { UserAuth } from '../context/UserContext';
import { useRouter } from 'next/navigation'

function Navbar(img) {

    const {logout, user} = UserAuth()
    const router = useRouter()
    if (user) {
        return (
            <div className='w-screen bg-black flex justify-between p-5 items-center' style={{ height: "10%" }}>
                <p className='text-white text-lg'>Ikigai</p>
                <div className="dropdown dropdown-end">
                    <Image src={img.img} width={50} height={50} className='rounded-full w-10 h-10' role='button' tabIndex={0} />
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
                        <li><a><MdPersonOutline size={20}/>Your Profile</a></li>
                        <li><a><MdOutlineArticle size={20}/>Your Articles</a></li>
                        <button className='btn btn-error' onClick={logout}>Logout</button>
                    </ul>
                </div>
            </div>
        )
    }

    else {
        router.push("/")
    }
}

export default Navbar