"use client";

import React, { useContext, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { UserAuth } from "@/app/context/UserContext";
import { uploadArticle } from "@/app/auth/method";
import { FileContext } from "@/app/context/FileContext";



function page() {
  const searchParams = useSearchParams();
  const { user } = UserAuth()
  const [file, setFile] = useContext(FileContext)

  const handleUpload = async () => {
    console.log(file)
    await uploadArticle(searchParams.get("title"), file, searchParams.get("body"), user.email)
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-2/3 flex flex-col items-center justify-center p-3">
        <div className="flex mb-3">
          {searchParams.getAll("tagState").map((check, index) => {
            if (check == "true") {
              return (
                <div key={index} className="mr-2">
                  <div className="badge badge-neutral">
                    {searchParams.getAll("tags")[index]}
                  </div>
                </div>
              );
            }
          })}
        </div>
        <h1 className="text-5xl mb-3">{searchParams.get("title")}</h1>
        <p>By {user.displayName}</p>
        <Image
          width={400}
          height={400}
          src={searchParams.get("imageUrl")}
          alt="Not loading"
          className="my-4 h-auto"
        />
        <div className="flex items-center justify-center flex-col">
          {searchParams.get("body").split("\n").map((body, index) => {
            return (
              <p className="break-all text-xl" key={index}>{searchParams.get("body").split("\n")[index]}</p>
            )
          })}
        </div>
        <button className="items-right btn btn-primary mt-3" onClick={() => handleUpload()}>Submit</button>
      </div>
    </div>
  );
}

export default page;
