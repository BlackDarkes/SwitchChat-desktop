import { useChatById } from "@/entities/chat";
import { useChatMessages } from "@/entities/message";
import { useLoginStore } from "@/features/auth";
import { ButtonChatJoin } from "@/features/chat-join";
import { useTypeChatStore } from "@/features/switch-type-chat";
import { MessageSubscription } from "@/shared/ui";
import { MessageField } from "@/widgets/message-field";
import { MessageList } from "@/widgets/message-list";
import { MessageTitle, MessageTitleDirect } from "@/widgets/message-titles";
import { JSX, useEffect } from "react";
import { redirect, useParams } from "react-router";

export const MessagePage = (): JSX.Element => {
	const { id } = useParams<{ id: string }>();
	const { messages } = useChatMessages(id as string);
	const { user } = useLoginStore();
	const { data: chat } = useChatById(id as string);
	const { setType } = useTypeChatStore();

	useEffect(() => {
		if (chat?.type === "DIRECT") {
			setType("CHATS");
		} else if (chat?.type === "GROUP") {
			setType("GROUPS");
		}
	}, [chat?.type, setType]);

	if (
		chat?.type === "SELF" &&
		chat.chatMembers.some((member) => member.userId === user?.id)
	) {
		redirect(`/chat/${id}/self`);
	}

	return (
		<>
			{chat?.type !== "DIRECT" ? (
				<>
					<div>
						<MessageTitle chat={chat} />
						<MessageList messages={messages} />
					</div>
					{(chat?.type === "CHANNEL" &&
						chat?.chatMembers.some(
							(member) =>
								member.userId === user?.id &&
								(member.role === "OWNER" || member.role === "ADMIN"),
						)) ||
					chat?.ownerId === user?.id ? (
						<MessageField />
					) : chat?.type === "GROUP" &&
					  chat?.chatMembers.some((member) => member.userId === user?.id) ? (
						<MessageField />
					) : chat?.type === "CHANNEL" &&
					  chat?.chatMembers.some(
							(member) =>
								member.userId === user?.id && member.role === "MEMBER",
					  ) ? (
						<MessageSubscription />
					) : (
						<ButtonChatJoin id={id as string} />
					)}
				</>
			) : (
				<>
					<div>
						<MessageTitleDirect chat={chat} />

						<MessageList messages={messages} />
					</div>

					<MessageField />
				</>
			)}
		</>
	);
};
