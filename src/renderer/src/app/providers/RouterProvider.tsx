import { ChatListPage, LoginPage, RegisterPage } from "@/pages/index";
import { createBrowserRouter, redirect } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { AuthLayout } from "../layouts/AuthLayout";
import { useLoginStore } from "@/features/auth";

const ensureAuthReady = async (): Promise<void> => {
	const state = useLoginStore.getState();
	if (!state.isReady) {
		await state.fetchUser();
	}
};

const getAuthState = (): { isAuth: boolean; isReady: boolean } => {
	const state = useLoginStore.getState();
	return { isAuth: state.isAuth, isReady: state.isReady };
};

export const router = createBrowserRouter([
	{
		element: <AuthLayout />,
		loader: async () => {
			await ensureAuthReady();
			const { isAuth } = getAuthState();
			if (isAuth) return redirect("/");
			return null;
		},
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
		loader: async () => {
			await ensureAuthReady();
			const { isAuth } = getAuthState();
			if (!isAuth) return redirect("/login");
			return null;
		},
		children: [
			{
				path: "/",
				element: <ChatListPage />,
			},
		],
	},
]);
