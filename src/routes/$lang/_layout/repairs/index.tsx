import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/_layout/repairs/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/$lang/_layout/repairs/"!</div>;
}
