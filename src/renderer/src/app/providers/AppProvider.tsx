import { JSX } from "react";
import { RouterProvider } from "react-router";
import { router } from "./RouterProvider";
import { ModalProvider } from "./ModalProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/libs/query/query-client";
import { SocketContextProvider } from "@/shared/lib/socket";
import { ENV } from "@/shared/config/env";

export const AppProvider = (): JSX.Element => {
	const api_url = ENV.api_url;

	return (
		<QueryClientProvider client={queryClient}>
			<SocketContextProvider apiUrl={api_url || ""}>
				<ModalProvider>
					<RouterProvider router={router} />
				</ModalProvider>
			</SocketContextProvider>
		</QueryClientProvider>
	);
};
