"use client";

import Link from "next/link";
import LangSwitch from "./LangSwitch";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n"


export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation();


	return (
		<nav className="col3 shadow-md sticky top-0">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex gap-4 flex-shrink-0 text-xl font-bold">
						{/* <ThemeSwitch /> */}
						<LangSwitch />	
            <Link href="/home" className="text-3xl font-extrabold underline underline-offset-4 txt2">Sigiz</Link>
          </div>

          {/* DESKTOP */}
          <div className="hidden md:flex space-x-2 text-2xl txt4" >
            <Link href="/home" className="col2 rounded-2xl px-2 border-2 border-[#0c120c] hover:border-[#a6bc36]">
              {t("home")}
            </Link>
            <Link href="/pricing" className="col2 rounded-2xl px-2 border-2 border-[#0c120c] hover:border-[#a6bc36]">
              {t("price")}
            </Link>
            <Link href="/projects" className="col2 rounded-2xl px-2 border-2 border-[#0c120c] hover:border-[#a6bc36]">
              {t("projects")}
            </Link>
            <Link href="/contacts" className="col2 rounded-2xl px-2 border-2 border-[#0c120c] hover:border-[#a6bc36]">
              {t("contacts")}
            </Link>
          </div>

          {/* MOBILE MENU BTN */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="txt5 text-3xl focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden col2 px-4 pb-4 space-y-2 pt-2">
          <Link href="/home" className="mobile-nav-btn txt4">
            {t("home")}
          </Link>
          <Link href="/pricing" className="mobile-nav-btn txt4">
            {t("price")}
          </Link>
          <Link href="/projects" className="mobile-nav-btn txt4">
            {t("projects")}
          </Link>
          <Link href="/contacts" className="mobile-nav-btn txt4">
            {t("contacts")}
          </Link>
        </div>
      )}
    </nav>
	)
}