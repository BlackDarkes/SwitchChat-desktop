import { CirclePlus } from "lucide-react";
import { useContactAdd } from "../api/contact-add";
import { useSearchUserStore } from "@/features/search";
import { JSX } from "react";

interface IButtonContactAddProps {
	id: string;
}

export const ButtonContactAdd = ({
	id,
}: IButtonContactAddProps): JSX.Element => {
	const { mutate: addContact } = useContactAdd();
	const { handleOpen } = useSearchUserStore();

	const handleAddContact = (contactId: string): void => {
		addContact(contactId);
		handleOpen(false);
	};

	return (
		<button type="button" onClick={() => handleAddContact(id)}>
			<CirclePlus />
		</button>
	);
};
