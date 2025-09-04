"use client";

import Link from "next/link";
import LangSwitch from "./LangSwitch";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n"


export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation();


	return (
		<nav className="bg-white shadow-md dark:bg-[#860001]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Лого / Имя */}
          <div className="flex gap-4 flex-shrink-0 text-xl font-bold text-gray-900 dark:text-white">
						<LangSwitch />	
            <Link href="/">Sigiz</Link>
          </div>

          {/* Десктоп-меню */}
          <div className="hidden md:flex space-x-6">
            <Link href="/home" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 ">
              {t("home")}
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 dark:text-gray-200">
              {t("price")}
            </Link>
            <Link href="/demos" className="text-gray-700 hover:text-blue-600 dark:text-gray-200">
              {t("projects")}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-200">
              {t("contacts")}
            </Link>
          </div>

          {/* Мобильная кнопка */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#422c0e] px-4 pb-4 space-y-2 pt-2">
          <Link href="/home" className="mobile-nav-btn">
            Home
          </Link>
          <Link href="/pricing" className="mobile-nav-btn">
            Pricing
          </Link>
          <Link href="/demos" className="mobile-nav-btn">
            Projects
          </Link>
          <Link href="/contact" className="mobile-nav-btn">
            Contacts
          </Link>
        </div>
      )}
    </nav>
	)
}