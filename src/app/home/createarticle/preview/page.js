"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { UserAuth } from "@/app/context/UserContext";

function page() {
  const searchParams = useSearchParams();
  const {user} = UserAuth()
  for (var i = 0; i < searchParams.get("body").length; i++) {
    console.log(searchParams.get("body")[i])
  }
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-2/3 flex flex-col items-center justify-center">
        <div className="flex items-start">
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
        <h1 className="text-5xl">{searchParams.get("title")}</h1>
        <p>By {user.displayName}</p>
        <Image
          width={400}
          height={400}
          src={searchParams.get("image")}
          alt="Not loading"
          className="my-4 ring ring-offset-base-100 ring-offset-2"
        />
        <p>{searchParams.get("body")}</p>
      </div>
    </div>
  );
}

export default page;
