"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { MdPersonOutline, MdOutlineArticle, MdOutlineLogout } from "react-icons/md";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { UserAuth } from '../context/UserContext';
import { useRouter } from 'next/navigation'
import toast, { Toaster } from "react-hot-toast";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input"

function Navbar(img) {

    const { logout } = UserAuth()

    const [file, setFile] = useState()

    const handleLogout = async () => {
        await logout()
        toast.success("Successfully Logged Out")
    }

    return (
        <div className='w-screen bg-black flex justify-between p-5 items-center' style={{ height: "10%" }}>
            <Toaster />
            <TooltipProvider>
                <p className='text-white text-3xl'>Ikigai</p>
                <div className='flex items-center justify-center'>
                    <Tooltip>
                        <TooltipTrigger>
                            <IoMdAdd size={30} className='mr-5' color='#FFFFFF' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Add Story</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <FaSearch size={20} className='mr-5' color='#FFFFFF' />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Search Story</p>
                        </TooltipContent>
                    </Tooltip>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                        <h3 className="font-bold text-lg">Create Story</h3>
                            <div className='flex w-full'>
                                <div className='w-1/2'>
                                    <ul className="steps steps-vertical">
                                        <li className="step">Title</li>
                                        <li className="step">Thumbnail</li>
                                        <li className="step">Content</li>
                                        <li className="step">Upload</li>
                                    </ul>
                                </div>
                                <div>
                                    <input type="text" placeholder="Title" className="input input-bordered w-full mt-4" />
                                    <input type="file" className="file-input w-full mt-4" onChange={(e) => setFile(e.target.files?.[0])} />
                                    <textarea className="textarea textarea-bordered w-full mt-4" placeholder="Story"></textarea>
                                </div>
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                                <button className='btn btn-info' onClick={handleLogout}>Upload</button>
                            </div>
                        </div>
                    </dialog>
                    <div className="dropdown dropdown-end">
                        <Tooltip>
                            <TooltipTrigger>
                                <Image src={img.img ? img.img : "/profilepic.jpeg"} width={50} height={50} alt="/profilepic.jpeg" className='rounded-full w-10 h-10' role='button' tabIndex={0} />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Profile</p>
                            </TooltipContent>
                        </Tooltip>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
                            <li><a><MdPersonOutline size={20} />Your Profile</a></li>
                            <li><a><MdOutlineArticle size={20} />Your Articles</a></li>
                            <li><a><FaRegHeart size={20} />Your Liked Stories</a></li>
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
            </TooltipProvider>
        </div>
    )
}

export default Navbar