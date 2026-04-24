import { X } from "lucide-react";
import { JSX } from "react";

interface ICloseButtonProps {
	readonly handleClose: () => void;
}

export const CloseButton = ({
	handleClose,
}: ICloseButtonProps): JSX.Element => {
	return (
		<button onClick={handleClose} className="absolute tot-5 right-5">
			<X size={30} />
		</button>
	);
};
