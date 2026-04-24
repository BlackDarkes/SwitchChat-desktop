import { ReactNode } from "react";
import { Link } from "react-router";

export const Header = (): ReactNode => {
	return (
		<header className="w-full bg-gray-800 text-white">
			<div className="flex justify-between mx-auto p-10 w-[min(100%,1440px)]">
				<h1>Logo</h1>

				<nav className="flex gap-x-5">
					<li>home</li>
					<li>about</li>
					<li>contact</li>
					<li>
						<Link to={"/login"}>login</Link>
					</li>
					<li>
						<Link to={"/register"}>register</Link>
					</li>
				</nav>
			</div>
		</header>
	);
};
