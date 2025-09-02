"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);



	return (
		<nav className="bg-white shadow-md dark:bg-yellow-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Лого / Имя */}
          <div className="flex-shrink-0 text-xl font-bold text-gray-900 dark:text-white">
            <Link href="/">Sigiz</Link>
          </div>

          {/* Десктоп-меню */}
          <div className="hidden md:flex space-x-6">
            <Link href="/home" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 pr-2">
              Home
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 dark:text-gray-200">
              Price
            </Link>
            <Link href="/demos" className="text-gray-700 hover:text-blue-600 dark:text-gray-200">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-200">
              Contacts
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
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4 space-y-2 pt-2">
          <Link href="/home" className="mobile-nav-btn">
            Главная
          </Link>
          <Link href="/pricing" className="mobile-nav-btn">
            Прайс
          </Link>
          <Link href="/demos" className="mobile-nav-btn">
            Демо
          </Link>
          <Link href="/contact" className="mobile-nav-btn">
            Контакты
          </Link>
        </div>
      )}
    </nav>
	)
}