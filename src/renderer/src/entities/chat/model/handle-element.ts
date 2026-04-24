import { IChat } from "@/shared/types";
import { useParams } from "react-router";

interface IHandleElementProps {
	chat: IChat | undefined;
}

export const useHandleElement = ({
	chat,
}: IHandleElementProps): ReturnType<typeof useHandleElement> => {
	const param = useParams<{ id: string }>();

	const lastReadMessageId = chat?.chatMembers?.at(-1)?.lastReadMessageId;

	const unreadCount =
		chat?.messages?.filter((message) => {
			if (!lastReadMessageId) return true;

			const lastReadMessage = chat.messages?.find(
				(m) => m.id === lastReadMessageId,
			);

			if (!lastReadMessage) return true;

			return new Date(message.createdAt) > new Date(lastReadMessage.createdAt);
		}).length ?? 0;

	const displayCount = unreadCount > 99 ? "99+" : unreadCount;

	return { param, unreadCount, displayCount };
};
