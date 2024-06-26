import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dashboard from "./dashboard/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple Tech App",
  description: "Generated by STL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <script src="https://kit.fontawesome.com/64ba2e3d37.js" crossOrigin="anonymous" ></script> */}
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap" rel="stylesheet"></link> */}
{/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script> */}



<body className="container-2xl grid px-6 h-screen w-full bg-zinc-100	">
    <header >
          <Navbar />
    </header>      
         <main className={inter.className}>{children}</main>
        {/* <footer>
            <Footer />
        </footer> */}

        <Footer />
    </body>

    </html>
  );
}
