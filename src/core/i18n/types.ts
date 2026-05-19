// src/i18n/types.ts
import type en from "../locales/en.json";

type Join<K, P> = K extends string
	? P extends string
		? `${K}.${P}`
		: never
	: never;

type LeafPaths<T> = {
	[K in keyof T & string]: T[K] extends object ? Join<K, LeafPaths<T[K]>> : K;
}[keyof T & string];

export type AppNamespaces = {
	common: typeof en;
	// Add more namespaces here as needed
};

export type NamespaceKeys<N extends keyof AppNamespaces> = LeafPaths<
	AppNamespaces[N]
>;

export type CommonKey = NamespaceKeys<"common">;
