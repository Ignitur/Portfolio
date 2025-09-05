"use client";

import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      className="hidden md:block border-2 hover:border-blue-500 rounded-xl px-3 py-1 active:bg-[#a6bc36] text-gray-800 dark:text-gray-200"
      onClick={() => setDark(!dark)}
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
