import { Jacques_Francois_Shadow } from "next/font/google";
import { Inter } from "next/font/google"
import { Oswald } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { getServerSession } from "next-auth";
import SessionProvider from "./provider/SessionProvider";
import { AuthContextProvider } from "./context/UserContext";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ['latin'], weight: "400" })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
