import { useNavigate, useParams } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "#/shared/components/ui/button";

export const CreateRepairButton = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const { lang } = useParams({ from: "/$lang/_layout", strict: true });
	return (
		<Button
			size="default"
			variant="default"
			className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
			onClick={() =>
				navigate({
					to: "/$lang/repairs/create",
					params: { lang },
				})
			}
		>
			<Plus />
			{t("sidebar.create_repair_job")}
		</Button>
	);
};
