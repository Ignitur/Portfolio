"use client"
import "./globals.css";
import dynamic from "next/dynamic";
import Footer from "./Components/Footer";

const Nav = dynamic(() => import("./Components/Nav"), { ssr: false });
const DynamicChildren = dynamic(() => import("./DynamicChildren"), { ssr: false });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	
  return (
    <html lang={'en'} className="dark" id="theme">
			<head>
			</head>
      <body className="flex flex-col flex-1 relative overflow-scroll scrollbar-hide">
				<Nav />
        <DynamicChildren>{children}</DynamicChildren>
				<Footer />
      </body>
    </html>
  );
}
