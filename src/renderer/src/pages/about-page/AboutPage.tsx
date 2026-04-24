import { Header } from "@widgets/header/ui/Header";
import { JSX } from "react";
import { Link } from "react-router";

export const AboutPage = (): JSX.Element => {
	return (
		<>
			<Header />

			<h1>About page</h1>

			<Link to={"/"}>home</Link>
		</>
	);
};
