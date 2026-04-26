import { ProfileModal } from "@/features/profile";
import { SettingsModal } from "@/features/settings";
import { JSX, ReactNode } from "react";
import { Toaster } from "sonner";

export const ModalProvider = ({
	children,
}: {
	children: ReactNode;
}): JSX.Element => {
	return (
		<>
			{children}

			<Toaster position="bottom-right" closeButton={true} duration={5000} />
			<SettingsModal />
			<ProfileModal />
		</>
	);
};
