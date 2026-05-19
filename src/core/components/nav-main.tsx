import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "#/shared/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "#/shared/components/ui/sidebar";
import type { SidebarItemType } from "../constants/sidebar-items";

export function NavMain({ items }: { items: SidebarItemType[] }) {
	const { t } = useTranslation();
	const navigate = useNavigate();

	return (
		<SidebarGroup>
			<SidebarGroupLabel>{t("sidebar.platform")}</SidebarGroupLabel>
			<SidebarMenu>
				{items.map((item) => (
					<Collapsible
						key={t(item.titleKey)}
						asChild
						className="group/collapsible"
						defaultOpen
					>
						<SidebarMenuItem>
							<CollapsibleTrigger asChild>
								<SidebarMenuButton
									tooltip={t(item.titleKey)}
									onClick={() =>
										item.to &&
										navigate({ to: item.to ?? "", params: item.params })
									}
								>
									{item.icon && <item.icon />}
									<span>{t(item.titleKey)}</span>
									{item.items && (
										<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
									)}
								</SidebarMenuButton>
							</CollapsibleTrigger>
							{item.items && (
								<CollapsibleContent>
									<SidebarMenuSub>
										{item.items?.map((subItem) => (
											<SidebarMenuSubItem key={t(subItem.titleKey)}>
												<SidebarMenuSubButton asChild>
													<Link to={subItem.to}>{t(subItem.titleKey)}</Link>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								</CollapsibleContent>
							)}
						</SidebarMenuItem>
					</Collapsible>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
