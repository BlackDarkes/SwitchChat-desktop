import { Modal } from "@/shared/ui";
import { ChatCreateForm } from "./ChatCreateForm";
import { useChatCreateStore } from "../model/chat-create-store";
import { JSX } from "react";

export const ChatCreateModal = (): JSX.Element => {
	const { isOpen, handleOpen } = useChatCreateStore();

	return (
		<Modal isOpen={isOpen} handleOpen={handleOpen}>
			<ChatCreateForm />
		</Modal>
	);
};
