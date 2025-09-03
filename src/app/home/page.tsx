import FAQItem from "../Components/Accordion";

export default function Home() {

  return (
		<div className="mx-[5%] mt-2 pb-6 bg-[#7c5413] flex flex-col">
			<section className="min-w-[55%] pt-20">
				<h1 className="mx-8 text-6xl font-mono bg-[#e8c2ad] w-auto text-[#860001]">Hello there!</h1>
				<h3 className="mx-10 mt-2 text-4xl">My name is <span className="font-semibold text-[#860001] px-1 bg-[#e8c2ad] rounded-2xl">Maurszky Michael</span></h3>
				<h4 className="mx-10 text-2xl">{`I'm a web developer, interpreter and language teacher`}</h4>
				<h4 className="mx-10 text-2xl">I love to write clean, elegant and efficient code </h4> 
				<h4 className="mx-10 text-2xl">And help peoples with my knowledge with all the languages</h4>
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
