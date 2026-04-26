import { MessageSend } from "@/features/message-send";
import { Container } from "@/shared/ui";
import { JSX } from "react";

export const MessageField = (): JSX.Element => {
	return (
		<section className="my-5">
			<Container mod="default">
				<MessageSend />
			</Container>
		</section>
	);
};
