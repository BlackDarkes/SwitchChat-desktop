import { chatApi } from "@/entities/chat";
import { useChatMessages } from "@/entities/message";
import { MessageSend } from "@/features/message-send";
import { useMobileMessages } from "@/features/mobile-messages";
import { IChat } from "@/shared/types";
import { MessageList } from "@/widgets/message-list";
import { MessageTitleSelf } from "@/widgets/message-titles";
import { JSX, useEffect, useRef, useState } from "react";

export const MessageSelfPage = (): JSX.Element => {
	const [chat, setChat] = useState<IChat | undefined>();
	const { handleOpen: handleMobileMessagesOpen } = useMobileMessages();
	const searchRef = useRef(true);

	useEffect(() => {
		if (searchRef.current) {
			handleMobileMessagesOpen(true);
		}

		const fetchChat = async (): Promise<void> => {
			const selfChat = await chatApi.getSelfChat();

			setChat(selfChat);
		};

		fetchChat();

		return () => {
			searchRef.current = false;
		};
	}, [handleMobileMessagesOpen]);

	const chatId = chat?.id ?? "";

	const { messages } = useChatMessages(chatId);

	if (!chatId) {
		return (
			<div className="flex items-center justify-center h-screen">
				<p>Загрузка чата...</p>
			</div>
		);
	}

	return (
		<>
			<div>
				<MessageTitleSelf />
				<MessageList messages={messages} />
			</div>
			<MessageSend />
		</>
	);
};
