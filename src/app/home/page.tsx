import FAQItem from "../Components/Accordion";

export default function Home() {

  return (
		<div className="mx-[5%] mt-2 pb-6 bg-green-950 flex flex-col">

			<section className="min-w-[55%] pt-20">
				<h1 className="ml-8 text-6xl font-mono bg-cyan-300/20 w-auto">Hello there!</h1>
				<h3 className="ml-10 mt-2 text-4xl">My name is Maurszky Michael</h3>
				<h4 className="ml-10 text-2xl">I'm a web developer, interpreter and language teacher</h4>
				<h4 className="ml-10 text-2xl">I love to write clean, elegant and efficient code </h4> 
				<h4 className="ml-10 text-2xl">And help peoples with my knowledge with all the languages</h4>
			</section>
			<section className="flex px-30 justify-between items-start" >
				<FAQItem
				question='Front-End Skills'
				answer={['JavaScript', 'HTML5', 'CSS3', 'React', 'TypeScript', 'Next.js']}
				defaultOpen={false} 
				className='ml-10 pt-20 text-3xl w-fit'
				/>
				<FAQItem
				question='Back-end Skills'
				answer={['Python', 'SQLite']}
				defaultOpen={false} 
				className='ml-10 pt-20 text-3xl w-fit'
				/>
				<FAQItem
				question='Languages'
				answer={['English', 'Russian', 'Hungarian', 'Japanese']}
				defaultOpen={false} 
				className='ml-10 pt-20 text-3xl w-fit'
				/>
			</section>
		</div>
  );
}
