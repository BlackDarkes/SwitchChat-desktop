import { Send } from "lucide-react";
import { JSX } from "react";

export const MessageButton = (): JSX.Element => {
	return (
		<button type="submit">
			<Send
				size={30}
				className="duration-400 transition hover:stroke-accent-color"
			/>
		</button>
	);
};
