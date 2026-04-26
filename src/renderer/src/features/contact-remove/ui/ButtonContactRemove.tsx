import { Trash2 } from "lucide-react";
import { useContactRemove } from "../api/remove-contact";
import { JSX } from "react";

interface IButtonContactRemoveProps {
	id: string;
}

export const ButtonContactRemove = ({
	id,
}: IButtonContactRemoveProps): JSX.Element => {
	const { mutate: removeContact } = useContactRemove();

	const handleRemoveContact = (contactId: string): void =>
		removeContact(contactId);

	return (
		<button type="button" onClick={() => handleRemoveContact(id)}>
			<Trash2 />
		</button>
	);
};
