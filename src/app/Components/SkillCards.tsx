import { FaReact, FaHtml5, FaJs, FaCss3, FaPython } from "react-icons/fa";




const skillsFront = [
		{icon: <FaHtml5/>, name: "HTML5"},
		{icon: <FaCss3/>, name: "CSS3"},
		{icon: <FaJs/>, name: "JavaScript"},
		{icon: "", name: "TypeScript"},
		{icon: <FaReact/>, name: "React"},
		{icon: "", name: "Next.js"},
		{icon: "", name: "TailwindCSS"},
	]
	const skillsBack = [
		{icon: <FaPython/>, name: "Python"},
		{icon: "", name: "SQLite"},

	]
	const skillsLang = [
		{icon: "", name: "English"},
		{icon: "", name: "Hungarian"},
		{icon: "", name: "Russian"},
		{icon: "", name: "Ukrainian"},
		{icon: "", name: "Japanese"},
	]


export default function SkillCards() {
	return (
		<div className="flex justify-between">
			<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
				{skillsFront.map((skill) => (
					<div className="flex flex-col items-center p-4 bg-white txt2 rounded-xl shadow hover:shadow-md transition">
						<span className="text-4xl">{skill.icon}</span>
						<p className="mt-2 text-gray-700 font-medium">{skill.name}</p>
					</div>
				))}
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
				{skillsBack.map((skill) => (
					<div className="flex flex-col items-center p-4 bg-white txt2 rounded-xl shadow hover:shadow-md transition">
						<span className="text-4xl">{skill.icon}</span>
						<p className="mt-2 text-gray-700 font-medium">{skill.name}</p>
					</div>
				))}
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
				{skillsLang.map((skill) => (
					<div className="flex flex-col items-center p-4 bg-white txt2 rounded-xl shadow hover:shadow-md transition">
						<span className="text-4xl">{skill.icon}</span>
						<p className="mt-2 text-gray-700 font-medium">{skill.name}</p>
					</div>
				))}
			</div>
		</div>
	)
}