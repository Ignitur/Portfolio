"use client"

import { useTranslation } from "react-i18next"
import "../../../i18n"

const languages = [
	{code: "en", lang: "EN"},
	{code: "ru", lang: "RU"},
	{code: "hu", lang: "HU"},
]


export default function LangSwitch() {
  const { i18n } = useTranslation();
	
	const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
	};

	return (
		<div>
			{languages.map((lng) => {
				return (
				<button 
				className={lng.code === i18n.language ? "selected" : ""}
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


