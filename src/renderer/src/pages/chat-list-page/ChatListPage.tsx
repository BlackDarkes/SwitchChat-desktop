import { useChats } from "@/entities/chat";
import { ChatList } from "@/widgets/chat-list";
import { JSX } from "react";

export const ChatListPage = (): JSX.Element => {
	const { data: chats, isPending } = useChats();

	return (
		<>
			<ChatList chats={chats} isPending={isPending} />
		</>
	);
};
