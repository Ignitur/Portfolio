"use client"

import FAQItem from "../Components/Accordion";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";


export default function Home() {
	const { t } = useTranslation();


  return (
		<div className="mx-[5%] mt-4 pb-6 col3 flex flex-col">  
			<section className="min-w-[55%] pt-10">
				<h1 className="mx-8 text-6xl font-mono w-auto txt4">{t("greeting")}</h1>
				<h3 className="mx-10 mt-2 text-4xl">I&apos;m <span className="font-semibold txt5 px-1 underline underline-offset-4 rounded-2xl">Maurszky Mihály</span></h3>
				<h4 className="mx-10 text-2xl">a web developer, interpreter, and language teacher.</h4>
				<h4 className="mx-10 text-2xl">I love to write clean, elegant and efficient code </h4> 
				<h4 className="mx-10 text-2xl">I share my knowledge of languages to help others.</h4>
			</section>

			<section className="flex md:px-30 justify-between items-start pb-8 px-0 mt-4 border-1 overflow-scroll
				 md:overflow-hidden " >
				<FAQItem
				question='Front-End Skills'
				answer={['JavaScript', 'HTML5', 'CSS3', 'React', 'TypeScript', 'Next.js']}
				defaultOpen={false} 
				className='ml-10 pt-10 text-3xl w-fit'
				/>
				<FAQItem
				question='Back-end Skills'
				answer={['Python', 'SQLite']}
				defaultOpen={false} 
				className='ml-10 pt-10 text-3xl w-fit'
				/>				
				<FAQItem
				question='Languages'
				answer={['English', 'Russian', 'Hungarian', 'Japanese']}
				defaultOpen={false} 
				className='ml-10 pt-10 text-3xl w-fit'
				/>
			</section>
		</div>
  );
}
