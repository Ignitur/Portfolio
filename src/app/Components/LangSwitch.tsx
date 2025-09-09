"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import "../../../i18n"

const languages = [
	{code: "en", lang: "EN"},
	{code: "ru", lang: "RU"},
	{code: "hu", lang: "HU"},
]


export default function LangSwitch() {
	const [value, setValue] = useState('');
  const { i18n } = useTranslation();

	useEffect(() => {
		const storedValue = localStorage.getItem('i18nextLng');
		if (storedValue) {
			setValue(storedValue);
		}
	},[])

	useEffect(() =>{
		localStorage.setItem("i18nextLng", value);
	}, [value])
	
	const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
	};

	return (
		<div>
			{languages.map((lng) => {
				return (
				<button 
				className={`rounded-lg px-3 py-1 mr-2 border-2 border-[#566922] ${
					lng.code === i18n.language
						? "col txt2"
						: "col2 txt4 hover:border-amber-300"
				}`}
				key={lng.code} 
				onClick={() => changeLanguage(lng.code)}
				>
					{lng.lang}
				</button>
				)
			})}
		</div>
	)
}


