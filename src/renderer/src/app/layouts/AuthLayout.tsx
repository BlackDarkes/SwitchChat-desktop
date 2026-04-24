import { Container } from "@/shared/ui";
import { JSX } from "react";
import { Outlet } from "react-router";

export const AuthLayout = (): JSX.Element => {
	return (
		<main>
			<Container className="flex items-center h-screen">
				<Outlet />
			</Container>
		</main>
	);
};
