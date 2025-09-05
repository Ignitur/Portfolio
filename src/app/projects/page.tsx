import { FaGithub, FaLinkedin, FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";


export default function Home() {
	const socials = [
		{ name: "GitHub", icon: <FaGithub/>, url: "https://github.com/Ignitur"},
		{ name: "LinkedIn", icon: <FaLinkedin/>, url: "https://www.linkedin.com/in/mikael-maurszky-5b33a6356"},
		{ name: "Instagram", icon: <FaInstagram/>, url: "https://instagram.com/maurszky_mihaly"},
		{ name: "Telegram", icon: <FaTelegram/>, url: "https://t.me/MiKaEl1121"},
		{ name: "Facebook", icon: <FaFacebook/>, url: "https://www.facebook.com/profile.php?id=100009177958818"},
	];


  return (
		<div>
			{/* PHONE */}
			<div className="relative">
				<div className="m-2 w-fit mx-[5%] rounded-2xl col3 flex-1 text-center">
					<span className="text-3xl txt4 font-bold">
						THIS IS NOT THE [PROJECTS] PAGE 
					</span>
				</div>
				<section className="col3 w-[90%] text-center h-auto mx-[5%] mt-8 py-4">
					<span className="txt4 text-2xl  font-bold pl-2">
						You can contact me trough socials:
					</span>
					<div className="flex flex-col gap-4 mt-6 ml-4 ">
						{socials.map((s, i) => (
							<a
								key={i}
								href={s.url}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
							>
								<span className="text-4xl  txt4">{s.icon}</span>
								
								<span className="text-2xl txt4">{s.name}</span>
							</a>
						))}
					</div>
					
				</section>
				<section className="col3 w-[90%] h-80 fixed mt-4 py-2 mx-[5%]">
						<div>
							Or you can just fill this form:
						</div>
				</section>
			</div>

			{/* DESKTOP */}
			<div className=" hidden md:block relative">
				<div className="m-2 w-fit mx-[30%] col3 flex-1 text-center">
					<span className="text-5xl txt4 font-bold">
						I'm happy that you looked here!
					</span>
				</div>
				<section className="col3 w-100 h-auto ml-2 py-2">
					<span className="txt4 text-3xl pl-2">
						You can contact me trough socials:
					</span>
					<div className="flex flex-col gap-4 mt-6 ml-4 ">
						{socials.map((s, i) => (
							<a
								key={i}
								href={s.url}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
							>
								<span className="text-4xl  txt4">{s.icon}</span>
								
								<span className="text-2xl txt4">{s.name}</span>
							</a>
						))}
					</div>
					
				</section>
				<section className="col3 w-100 h-80 fixed right-10">
						<div>
							Or you can just fill this form:
						</div>
				</section>
			</div>
		</div>
  );
}
