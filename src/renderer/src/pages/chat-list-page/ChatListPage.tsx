import { useDirectChats, useGroupChats } from "@/entities/chat";
import { useTypeChatStore } from "@/features/switch-type-chat";
import { ChatList } from "@/widgets/chat-list";
import { JSX } from "react";

export const ChatListPage = (): JSX.Element => {
	const { type } = useTypeChatStore();

	const directChats = useDirectChats();
	const groupChats = useGroupChats();

	const { data: chats, isPending } =
		type === "CHATS" ? directChats : groupChats;

	return (
		<>
			<ChatList chats={chats} isPending={isPending} />
		</>
	);
};
