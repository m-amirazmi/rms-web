import { useNavigate } from "@tanstack/react-router";
import {
	BookOpen,
	Bot,
	Frame,
	GalleryVerticalEnd,
	PieChart,
	Settings2,
	SquareTerminal,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { NavMain } from "#/core/components/nav-main";
import { NavProjects } from "#/core/components/nav-projects";
import { NavUser } from "#/core/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenuButton,
	SidebarRail,
} from "#/shared/components/ui/sidebar";
import { sidebarItems } from "../constants/sidebar-items";

// This is sample data.
const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const navigate = useNavigate();
	const { t } = useTranslation();
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<SidebarMenuButton
					size="lg"
					className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
					onClick={() => navigate({ to: "/" })}
				>
					<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
						<GalleryVerticalEnd className="size-4" />
					</div>
					<div className="grid flex-1 text-left text-sm leading-tight">
						<span className="truncate font-medium">{t("app.name")}</span>
						<span className="truncate text-xs">{t("app.description")}</span>
					</div>
				</SidebarMenuButton>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={sidebarItems} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
