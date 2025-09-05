"use client"

import Link from "next/link";

export default function Home() {
  return (
		<div className="flex flex-col items-center justify-center h-[80%] text-center">
			<span className="col3 txt5 p-1 rounded-xl">
			Learn more about me:
			</span>
			<Link href="/home" className="col2 mt-4 txt4 text-xl rounded-2xl px-4 py-2 border-2 border-[#0c120c] hover:border-[#a6bc36] ">
				Homepage
			</Link>
		</div>
  );
}
