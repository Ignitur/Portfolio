import { useRouter } from "next/navigation";

export default function LangSwitch() {
	const router = useRouter();

	const changeLang = (lng: string) => {
		const currentPath = window.location.pathname;
		const newPath = currentPath.replace(/^\/(en|ru|hu)/, `/${lng}`);
		router.push(newPath);
	}

	return (
		<div className="flex gap-2">
			<button onClick={() => changeLang('en')}>EN</button>
			<button onClick={() => changeLang('ru')}>RU</button>
			<button onClick={() => changeLang('hu')}>HU</button>
		</div>
	);
}



