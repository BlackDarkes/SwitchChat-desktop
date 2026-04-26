import { ChatListPage, LoginPage, RegisterPage } from "@/pages/index";
import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { AuthLayout } from "../layouts/AuthLayout";

export const router = createBrowserRouter([
	{
		element: <AuthLayout />,
		children: [
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "/register",
				element: <RegisterPage />,
			},
		],
	},
	{
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <ChatListPage />,
			},
		],
	},
]);
