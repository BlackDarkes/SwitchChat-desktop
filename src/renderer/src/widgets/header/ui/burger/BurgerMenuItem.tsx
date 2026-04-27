import { IBurgerItems } from "../../model/burger-items";
import { JSX, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router";
import { useLoginStore } from "@/features/auth";
import { useTheme } from "@/app/providers/ThemeProvider";

interface IBurgerMenuItemProps {
	item: IBurgerItems;
	handleOpen: () => void;
	handleSettingsOpen: () => void;
	handleCreateChatOpen: () => void;
	handleMobileMessagesOpen: (open: boolean) => void;
}

const emptySubscribe = () => () => {};

export const BurgerMenuItem = ({
	item,
	handleOpen,
	handleSettingsOpen,
	handleCreateChatOpen,
	handleMobileMessagesOpen,
}: IBurgerMenuItemProps): JSX.Element => {
	const { theme, toggleTheme } = useTheme();
	const isMounted = useSyncExternalStore(
		emptySubscribe,
		() => true,
		() => false,
	);
	const { logout } = useLoginStore();

	if (!isMounted) {
		return <></>;
	}

	const handleClose = async (): Promise<void> => {
		logout();
		window.location.href = "/";
	};

	return (
		<li>
			{item.isLink ? (
				<Link
					to={item.link || ""}
					onClick={() => {
						handleOpen();
						handleMobileMessagesOpen(true);
					}}
				>
					{item.title}
				</Link>
			) : item.title === "Выход" ? (
				<button type="button" onClick={handleClose}>
					{item.title}
				</button>
			) : item.title === "Тема" ? (
				<button
					type="button"
					onClick={toggleTheme}
					className="flex items-center gap-x-2"
				>
					{item.title}

					{theme === "light" ? (
						<Sun suppressHydrationWarning />
					) : (
						<Moon suppressHydrationWarning />
					)}
				</button>
			) : item.title === "Создать чат" ? (
				<button
					type="button"
					onClick={() => {
						handleOpen();
						handleCreateChatOpen();
					}}
				>
					{item.title}
				</button>
			) : (
				<button
					type="button"
					onClick={() => {
						handleOpen();
						handleSettingsOpen();
					}}
				>
					{item.title}
				</button>
			)}
		</li>
	);
};
