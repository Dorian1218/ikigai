import { Jacques_Francois_Shadow } from "next/font/google";
import { Inter } from "next/font/google";
import { Oswald } from "next/font/google";
import { AuthContextProvider } from "../context/UserContext";
import { Suspense } from "react";
import Loading from "../loading";
import Navbar from "../components/Navbar";

const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export default async function Layout({ children }) {
    return (
            <>
                <AuthContextProvider>
                    <Navbar />
                    {children}
                </AuthContextProvider>
            </>
    );
}