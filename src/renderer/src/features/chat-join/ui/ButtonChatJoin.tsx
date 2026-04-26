import { JSX } from "react";
import { useChatJoin } from "../api/chat-join";

interface IButtonChatJoinProps {
	id: string;
}

export const ButtonChatJoin = ({ id }: IButtonChatJoinProps): JSX.Element => {
	const { mutate: chatJoin } = useChatJoin();

	return (
		<button type="button" onClick={() => chatJoin(id)}>
			ПРИСОЕДИНИТЬСЯ
		</button>
	);
};
