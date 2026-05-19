import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/_layout/repairs/create/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/$lang/_layout/repairs/create/"!</div>;
}
