import { useChatFavorites } from "@/entities/chat";
import { useLoginStore } from "@/features/auth";
import { ChatFavorites } from "@/widgets/chat-favorites";
import { JSX } from "react";

export const ChatFavoritePage = (): JSX.Element => {
	const { data: chatFavorites } = useChatFavorites();
	const { user } = useLoginStore();

	return (
		<>
			<ChatFavorites chats={chatFavorites} user={user} />
		</>
	);
};
