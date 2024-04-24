import Image from 'next/image'
import React from 'react'
import { MdPersonOutline, MdOutlineArticle, MdOutlineLogout } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { UserAuth } from '../context/UserContext';
import { useRouter } from 'next/navigation'
import toast, { Toaster } from "react-hot-toast";

function Navbar(img) {

    const { logout } = UserAuth()

    const handleLogout = async () => {
        await logout()
        toast.success("Successfully Logged Out")
    }

    return (
        <div className='w-screen bg-black flex justify-between p-5 items-center' style={{ height: "10%" }}>
            <Toaster />
            <p className='text-white text-3xl'>Ikigai</p>
            <div className='flex items-center justify-center'>
                <FaSearch size={20} className='mr-5' color='#FFFFFF' />
                <div className="dropdown dropdown-end">
                    <Image src={img.img ? img.img : "/profilepic.jpeg"} width={50} height={50} alt="/profilepic.jpeg" className='rounded-full w-10 h-10' role='button' tabIndex={0} />
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
                        <li><a><MdPersonOutline size={20} />Your Profile</a></li>
                        <li><a><MdOutlineArticle size={20} />Your Articles</a></li>
                        <button className="btn btn-error" onClick={() => document.getElementById('my_modal_1').showModal()}>Logout</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Logout</h3>
                                <p className="py-4">Are you sure you want to logout?</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                    <button className='btn btn-error' onClick={handleLogout}>Logout</button>
                                </div>
                            </div>
                        </dialog>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar