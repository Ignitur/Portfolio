"use client"
import "./globals.css";
import dynamic from "next/dynamic";

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
      <body className="flex flex-col">
				<Nav />
        <DynamicChildren>{children}</DynamicChildren>
      </body>
    </html>
  );
}
