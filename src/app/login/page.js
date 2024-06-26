'use client'
import React from "react";
import { redirect, useRouter } from 'next/navigation'
import Image from 'next/image'
import Profilepic from "../../../public/profilepic.jpeg"
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react"
import { UserAuth } from "../context/UserContext";



function Page() {

    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [data, setData] = React.useState({ email: "", password: "" })
    const router = useRouter()
    const { login, user } = UserAuth()

    const handleform = async (e) => {
        e.preventDefault()
        try {
            await login(data.email, data.password)
            toast.success("Successfully created account")
        }
        catch (error) {
            if (error) {
                var message = error.message.substring(error.message.indexOf("/") + 1,
                    error.message.lastIndexOf(")"))
                message = message.replace("-", " ")
                var output = "" + message.charAt(0).toUpperCase();
                for (var i = 1; i < message.length; i++) {
                    if (message.charAt(i - 1) == " ") {
                        output += message.charAt(i).toUpperCase();
                    } else {
                        output += message.charAt(i);
                    }
                }
                return (
                    toast.error(output, {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        }
                    })
                )
            }
        }
    }

    const handleGoogleLogin = (e) => {
        e.preventDefault()
        try {
            signInWithGoogle()
            toast.success("Successfully created account")
        } catch (error) {
            if (error) {
                var message = error.message.substring(error.message.indexOf("/") + 1,
                    error.message.lastIndexOf(")"))
                message = message.replace("-", " ")
                var output = "" + message.charAt(0).toUpperCase();
                for (var i = 1; i < message.length; i++) {
                    if (message.charAt(i - 1) == " ") {
                        output += message.charAt(i).toUpperCase();
                    } else {
                        output += message.charAt(i);
                    }
                }
                return (
                    toast.error(output, {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        }
                    })
                )
            }
        }

    }

    if (!user) {
        return (
            <div className="h-screen flex items-center justify-center p-10">
                <Toaster />
                <div className="h-full w-full flex flex-col justify-start p-5 items-center">
                    <Image src={Profilepic} alt='IMG2' className="rounded-full h-20 w-20" />
                    <p className="text-4xl font-bold mb-3">ikigai.</p>
                    <div className="btn w-4/5 max-w-sm h-12 flex items-center border justify-center relative bg-white rounded-lg cursor-pointer" onClick={handleGoogleLogin}>
                        <div className="absolute left-4">
                            <FcGoogle size={20} />
                        </div>
                        <p style={{ color: "#1F1F1F" }}>Sign In With Google</p>
                    </div>
                    <p className="m-2">or</p>
                    <label className="input input-bordered flex items-center gap-2 w-4/5 max-w-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="w-full" placeholder="Email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                    </label>
                    <label className="input input-bordered flex items-center mt-4 gap-2 w-4/5 max-w-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" className="w-full" placeholder="Password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                    </label>
                    <button className="btn btn-primary mt-4 w-4/5 max-w-sm" onClick={handleform}>Sign Up</button>
                    <p>Already have an account? <Link href="/signup" className="text-blue-900">Sign In</Link></p>
                </div>
            </div>
        )
    }

    else {
        redirect("/home")
    }
}

export default Page