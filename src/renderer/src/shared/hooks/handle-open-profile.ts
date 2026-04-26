import { IUser } from "../types";

interface IHandleOpenProfileProps {
	user: IUser | undefined;
	handleOpen: (user: IUser | undefined, isMy: boolean) => void;
}

interface IHandleOpenProfile {
	handleOpenProfile: (props: IHandleOpenProfileProps) => void;
}

export const useHandleOpenProfile = (): IHandleOpenProfile => {
	const handleOpenProfile = ({
		user,
		handleOpen,
	}: IHandleOpenProfileProps): void => {
		handleOpen(user, false);
	};

	return { handleOpenProfile };
};
