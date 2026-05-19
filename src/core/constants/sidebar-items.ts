import type { ToOptions } from "@tanstack/react-router";
import { BadgePlus, LayoutDashboard, type LucideIcon } from "lucide-react";
import type { CommonKey } from "../i18n/types";

export type SidebarItemType = {
	titleKey: CommonKey;
	to?: ToOptions["to"];
	params?: ToOptions["params"];
	icon?: LucideIcon;
	items?: Omit<SidebarItemType, "items" | "icons">[];
};

export const sidebarItems: SidebarItemType[] = [
	{
		titleKey: "sidebar.items.dashboard",
		to: "/",
		icon: LayoutDashboard,
	},
	{
		titleKey: "sidebar.items.repairs",
		// to: "/$lang/repairs",
		icon: BadgePlus,
		items: [
			{
				titleKey: "sidebar.items.repairs_create",
				to: "/$lang/repairs/create",
			},
		],
	},
];
