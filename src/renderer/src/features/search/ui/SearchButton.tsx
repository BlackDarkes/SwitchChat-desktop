import { Search } from "lucide-react";
import { JSX } from "react";

interface ISearchButtonProps {
	handleOpen: (open: boolean) => void;
}

export const SearchButton = ({
	handleOpen,
}: ISearchButtonProps): JSX.Element => {
	return (
		<button type="button" onClick={() => handleOpen(true)}>
			<Search size={30} className="text-primary-color" />
		</button>
	);
};
