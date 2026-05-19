import { useNavigate, useParams, useRouterState } from "@tanstack/react-router";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

const LANGS = [
	{ code: "en", label: "English" },
	{ code: "ms", label: "Bahasa Melayu" },
];

export function LanguageSwitcher() {
	const navigate = useNavigate();
	const { lang } = useParams({ from: "/$lang/_layout" });

	const pathname = useRouterState({ select: (s) => s.location.pathname });

	function switchLang(newLang: string) {
		if (newLang === lang) return;

		const newPath = pathname.replace(/^\/(en|ms)/, `/${newLang}`);
		navigate({ to: newPath });
	}

	return (
		<Button
			role="switch"
			aria-checked={lang === "ms"}
			onClick={() => switchLang(lang === "en" ? "ms" : "en")}
			variant="outline"
			className="relative inline-flex items-center rounded-full px-1 py-0.5 w-16 h-7 border border-input bg-muted hover:bg-muted"
		>
			{/* Sliding thumb */}
			<span
				className={cn(
					"absolute h-6 w-7 rounded-full bg-primary transition-transform duration-200 ease-in-out",
					lang === "ms" ? "translate-x-4" : "-translate-x-4",
				)}
			/>
			{/* Labels */}
			<span
				className={cn(
					"relative z-10 w-7 text-center text-xs transition-colors",
					lang === "en"
						? "text-primary-foreground font-bold"
						: "text-muted-foreground",
				)}
			>
				{LANGS.find((l) => l.code === "en")?.code.toUpperCase()}
			</span>
			<span
				className={cn(
					"relative z-10 w-7 text-center text-xs transition-colors",
					lang === "ms"
						? "text-primary-foreground font-bold"
						: "text-muted-foreground",
				)}
			>
				{LANGS.find((l) => l.code === "ms")?.code.toUpperCase()}
			</span>
		</Button>
	);
}
