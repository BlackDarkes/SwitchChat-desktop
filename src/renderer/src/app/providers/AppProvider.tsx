import { JSX } from "react";
import { RouterProvider } from "react-router";
import { router } from "./RouterProvider";
import { ModalProvider } from "./ModalProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/libs/query/query-client";

export const AppProvider = (): JSX.Element => {
	return (
		<QueryClientProvider client={queryClient}>
			<ModalProvider>
				<RouterProvider router={router} />
			</ModalProvider>
		</QueryClientProvider>
	);
};
