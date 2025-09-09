import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";


export default function Footer() {
	return (
	<footer className="pt-3 h-10 bg-gray-900 text-gray-400">
		<div className="max-w-6xl mx-auto flex justify-between items-center">
			<p className="text-sm">© 2025 Sigiz. Built with Next.js & TailwindCSS</p>
			<div className="flex gap-4 text-xl">
				<a href="https://github.com/Ignitur" target="_blank"><FaGithub /></a>
				<a href="https://linkedin.com/in/mikael-maurszky-5b33a6356" target="_blank"><FaLinkedin /></a>
				<a href="https://t.me/MiKaEl1121" target="_blank"><FaTelegram /></a>
			</div>
		</div>
	</footer>
	)
} 
