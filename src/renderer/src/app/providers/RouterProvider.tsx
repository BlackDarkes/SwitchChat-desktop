import { HomePage } from "@pages/home-page/HomePage";
import { AboutPage } from "@pages/index";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/about",
		element: <AboutPage />,
	},
]);
