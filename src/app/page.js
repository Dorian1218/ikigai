"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation'


export default function Home() {

  const router = useRouter()

  return (
    <div className="h-screen p-5 flex items-center flex-col justify-center">
      <div className=" flex items-center justify-center flex-col h-fit">
        <div className="bg-fuchsia-600 w-fit px-7 py-6">
          <p className="text-5xl">
            ikigai.
          </p>
        </div>
        <p className="mt-3 text-3xl">News, Refocused.</p>
      </div>
      <div className="flex flex-col fixed bottom-5">
        <button className="btn bg-fuchsia-600 mt-3 btn-lg" onClick={() => router.push("/signup")}>Get Started</button>
        <button className="btn btn-neutral mt-3 btn-lg" onClick={() => router.push("/login")}>Login</button>
      </div>
    </div>
  );
}
