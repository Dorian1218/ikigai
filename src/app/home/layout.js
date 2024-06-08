"use client"

import { Jacques_Francois_Shadow } from "next/font/google";
import { Inter } from "next/font/google";
import { Oswald } from "next/font/google";
import { AuthContextProvider } from "../context/UserContext";
import { Suspense, useState } from "react";
import Loading from "../loading";
import Navbar from "../components/Navbar";
import { FileContext } from "../context/FileContext";

const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export default async function Layout({ children }) {

const [file, setFile] = useState(null);

  return (
    <>
      <AuthContextProvider>
        <FileContext.Provider value={[file, setFile]}>
          <Navbar />
          {children}
        </FileContext.Provider>
      </AuthContextProvider>
    </>
  );
}
