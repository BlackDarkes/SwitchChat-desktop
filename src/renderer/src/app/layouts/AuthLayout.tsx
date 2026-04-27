import { ThemeToggle } from "@/features/theme-toggle";
import { Container } from "@/shared/ui";
import { JSX } from "react";
import { Outlet } from "react-router";

export const AuthLayout = (): JSX.Element => {
	return (
		<main>
			<Container className="flex items-center h-screen">
				<ThemeToggle />

				<Outlet />
			</Container>
		</main>
	);
};
