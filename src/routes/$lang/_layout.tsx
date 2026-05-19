import { createFileRoute, useParams } from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BaseLayout } from "#/core/layouts/base-layout";

const SUPPORTED_LANGS = ["en", "ms"] as const;
type Lang = (typeof SUPPORTED_LANGS)[number];

export const Route = createFileRoute("/$lang/_layout")({
	params: {
		parse: ({ lang }) => {
			if (!SUPPORTED_LANGS.includes(lang as Lang)) {
				throw new Error(`Unsupported language: ${lang}`);
			}
			return { lang: lang as Lang };
		},
		stringify: ({ lang }) => ({ lang }),
	},
	component: LangLayout,
});

function LangLayout() {
	const { lang } = useParams({ from: "/$lang/_layout" });
	const { i18n } = useTranslation();

	useEffect(() => {
		if (i18n.language !== lang) {
			i18n.changeLanguage(lang);
		}
	}, [lang, i18n]);

	return <BaseLayout />;
}
