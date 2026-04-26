import { useNavigate } from "react-router";
import { useChatLeave } from "../api/chat-leave";
import { cn } from "@/shared/lib/utils";
import { toast } from "sonner";
import { JSX } from "react";

interface IButtonChatLeaveProps {
	id: string;
	onClose: () => void;
}

export const ButtonChatLeave = ({
	id,
	onClose,
}: IButtonChatLeaveProps): JSX.Element => {
	const navigate = useNavigate();
	const { mutate: chatLeave, isPending } = useChatLeave();

	const handleLeave = (): void => {
		chatLeave(id, {
			onSuccess: () => {
				toast.success("Вы покинули чат");
				onClose();
				navigate("/");
			},
			onError: () => {
				toast.error("Не удалось покинуть чат");
			},
		});
	};

	return (
		<button
			type="button"
			onClick={handleLeave}
			disabled={isPending}
			className={cn(
				"w-full px-4 py-2.5 rounded-xl text-sm font-medium text-center",
				"bg-secondary-bg/20 text-secondary-color",
				"hover:bg-red-500/10 hover:text-red-500",
				"active:scale-[0.98] transition-all duration-200",
				"focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50",
				"disabled:opacity-50 disabled:cursor-not-allowed",
			)}
		>
			{isPending ? "Выход..." : "Выйти из чата"}
		</button>
	);
};
