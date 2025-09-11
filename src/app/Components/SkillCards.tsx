import { FaReact, FaHtml5, FaJs, FaCss3, FaPython, FaFlask} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiSqlalchemy } from "react-icons/si";
import "flag-icons/css/flag-icons.min.css";


const skillsAll = [
	{
		category: "Front-end",
		items: [
		{icon: <FaHtml5/>, name: "HTML5"},
		{icon: <FaCss3/>, name: "CSS3"},
		{icon: <FaJs/>, name: "JavaScript"},
		{icon: <SiTypescript/>, name: "TypeScript"},
		{icon: <FaReact/>, name: "React"},
		{icon: <SiNextdotjs/>, name: "Next.js"},
		{icon: <SiTailwindcss/>, name: "TailwindCSS"},
	]},
	{
		category: "Back-end",
		items: [
		{icon: <FaPython/>, name: "Python"},
		{icon: <SiSqlalchemy/>, name: "SQLAlchemy"},
		{icon: <FaFlask/>, name: "Flask"},
	]},
	{
		category: "Language",
		items: [
		{icon: <span className="fi fi-us"></span>, name: "English"},
		{icon: <span className="fi fi-hu"></span>, name: "Hungarian"},
		{icon: <span className="fi fi-ru"></span>, name: "Russian"},
		{icon: <span className="fi fi-ua"></span>, name: "Ukrainian"},
		{icon: <span className="fi fi-jp"></span>, name: "Japanese"},
	]},
];

// const skillsFront = [
// 		{icon: <FaHtml5/>, name: "HTML5"},
// 		{icon: <FaCss3/>, name: "CSS3"},
// 		{icon: <FaJs/>, name: "JavaScript"},
// 		{icon: <SiTypescript/>, name: "TypeScript"},
// 		{icon: <FaReact/>, name: "React"},
// 		{icon: <SiNextdotjs/>, name: "Next.js"},
// 		{icon: <SiTailwindcss/>, name: "TailwindCSS"},
// 	];
// 	const skillsBack = [
// 		{icon: <FaPython/>, name: "Python"},
// 		{icon: <SiSqlalchemy/>, name: "SQLite"},
// 	];
// 	const skillsLang = [
// 		{icon: "fi fi-us", name: "English"},
// 		{icon: "fi fi-hu", name: "Hungarian"},
// 		{icon: "fi fi-ru", name: "Russian"},
// 		{icon: "fi fi-ua", name: "Ukrainian"},
// 		{icon: "fi fi-jp", name: "Japanese"},
// 	];

export default function SkillCards() {
	return (
		<div className="flex justify-between mt-4">
			<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
				{skillsAll.map((skillCat) => {
					return (
					<div key={skillCat.category}
					className="grid grid-cols-2 md:grid-cols-3 gap-6 col3 rounded-2xl">
						<div className="border-b-2 border-[#83e917] col-span-3 grid place-items-center text-2xl h-16">
							<span className="">
								{skillCat.category}
							</span>
						</div>
						{skillCat.items.map((skill) => {
							return (
							<div key={skill.name} 
								className="m-1 flex flex-col max-w-[120px] max-h-[100px] items-center p-4 bg-white txt2 rounded-xl shadow hover:shadow-md transition
								">
								<span className="text-4xl shadow-xs shadow-black">{skill.icon}</span>
								<span className={`${skill.icon} text-4xl border-1 border-black`}></span>
								<p className="mt-2 text-gray-700 font-medium">{skill.name}</p>
							</div>
				)})}
					</div>
				)})}
			</div>
			{/* <div className="grid grid-cols-2 md:grid-cols-3 gap-6 col3 rounded-2xl">
				{skillsFront.map((skill) => (
					<div key={skill.name} 
					 className="m-1 flex flex-col max-w-[120px] max-h-[100px] items-center p-4 bg-white txt2 rounded-xl shadow hover:shadow-md transition">
						<span className="text-4xl">{skill.icon}</span>
						<p className="mt-2 text-gray-700 font-medium">{skill.name}</p>
					</div>
				))}
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-6 col3 rounded-2xl">
				{skillsBack.map((skill) => (
					<div key={skill.name} 
					className="m-1 flex flex-col max-w-[120px] max-h-[100px] items-center p-4 bg-white txt2 rounded-xl shadow hover:shadow-md transition">
						<span className="text-4xl">{skill.icon}</span>
						<p className="mt-2 text-gray-700 font-medium">{skill.name}</p>
					</div>
				))}
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-6 col3 rounded-2xl">
				{skillsLang.map((skill) => (
					<div key={skill.name}
					className="m-1 flex flex-col max-w-[120px] max-h-[100px] items-center p-4 bg-white txt2 rounded-xl shadow hover:shadow-md transition">
						<span className={`${skill.icon} text-4xl border-1 border-black`}></span>
						<p className="mt-2 text-gray-700 font-medium">{skill.name}</p>
					</div>
				))}
			</div> */}
		</div>
	)
}