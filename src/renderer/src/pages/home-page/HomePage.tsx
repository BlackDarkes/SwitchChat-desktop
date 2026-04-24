import { Button } from "@shared/ui";
import { Header } from "@widgets/header/ui/Header";
import { JSX } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

export const HomePage = (): JSX.Element => {
	const handlShowMessage = (): void => {
		toast.success("toast");
	};

	return (
		<>
			<Header />

			<h1>Home page</h1>

			<Button>
				<Link to={"/about"}>about</Link>
			</Button>

			<Button onClick={handlShowMessage}>toast</Button>
		</>
	);
};
