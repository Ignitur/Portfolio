"use client"

import FAQItem from "../Components/Accordion";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

export default function Home() {
	const { t } = useTranslation();

	

  return (
		<div className="mx-[2%] mt-52 flex flex-col items-center ">  
			<section className="min-w-[55%] mb-30 w-fit p-10 col3 rounded-4xl text-center">
				<h1 className="mx-10 text-6xl font-mono w-auto">{t("greeting")}</h1>
				<h3 className="mx-10 mt-2 text-4xl">I&apos;m <span className="font-semibold txt2 px-2 bg-[#56f1ff]/40  rounded-2xl">Maurszky Mihály</span></h3>
				<h4 className="mx-10 mt-2 text-2xl">{`a </developer>, interpreter, and language teacher`}.</h4>
				<h4 className="mx-10 mt-2 text-2xl">I love to write clean, elegant and efficient code </h4> 
				<h4 className="mx-10 mt-2 text-2xl">I share my knowledge of languages to help others.</h4>
			</section>

			<div className="h-16 w-16 col3 text-center absolute right-10 bottom-10 rounded-2xl pt-2">
				<p>Scroll</p> 
				<p>down</p>
			</div>

			<section className="flex md:px-20 justify-between items-start pb-8 px-0 mt-20 border-1 overflow-scroll
				 md:overflow-hidden col3 rounded-4xl w-fit" >
				<FAQItem
				question='Front-End Skills'
				answer={['JavaScript', 'HTML5', 'CSS3', 'React', 'TypeScript', 'Next.js']}
				defaultOpen={false} 
				className='pt-10 text-3xl w-fit'
				/>
				<FAQItem
				question='Back-end Skills'
				answer={['Python', 'SQLite']}
				defaultOpen={false} 
				className='ml-5 pt-10 text-3xl w-fit'
				/>				
				<FAQItem
				question='Languages'
				answer={['English', 'Russian', 'Hungarian', 'Japanese']}
				defaultOpen={false} 
				className='ml-5 pt-10 text-3xl w-fit'
				/>
			</section>
			

		</div>
  );
}
