import { JSX } from "react";
import { RouterProvider } from "react-router";
import { router } from "./RouterProvider";
import { ModalProvider } from "./ModalProvider";

export const AppProvider = (): JSX.Element => {
	return (
		<>
			<ModalProvider>
				<RouterProvider router={router} />
			</ModalProvider>
		</>
	);
};
