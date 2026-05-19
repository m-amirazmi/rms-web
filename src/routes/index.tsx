import { createFileRoute, redirect } from "@tanstack/react-router";
import i18n from "#/core/i18n/config";

export const Route = createFileRoute("/")({
	beforeLoad: () => {
		const lang = i18n.language?.startsWith("ms") ? "ms" : "en";
		throw redirect({ to: `/$lang`, params: { lang } });
	},
});
