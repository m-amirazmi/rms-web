import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import ms from "../locales/ms.json";

i18n.use(initReactI18next).init({
	resources: {
		en: {
			common: en,
		},
		ms: {
			common: ms,
		},
	},
	lng: "en",
	interpolation: { escapeValue: false },
	defaultNS: "common",
	ns: ["common"],
});

export default i18n;
