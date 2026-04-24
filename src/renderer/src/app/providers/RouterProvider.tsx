import { HomePage } from "@/pages/home-page/HomePage";
import { AboutPage, LoginPage, RegisterPage } from "@/pages/index";
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
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},
]);
