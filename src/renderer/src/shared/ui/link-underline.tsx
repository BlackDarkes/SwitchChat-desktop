import { cn } from "@/shared/lib/utils";
import { JSX } from "react";
import { Link } from "react-router";

interface ILinkUnderlineProps {
	className?: string;
	link: string;
	title: string;
}

export const LinkUnderline = ({
	className,
	link,
	title,
}: ILinkUnderlineProps): JSX.Element => {
	return (
		<Link
			to={link}
			className={cn(
				`relative`,
				`before:absolute before:-bottom-0.75 before:left-0 before:w-full before:h-px before:bg-primary-color before:scale-x-0 before:origin-left before:duration-400 hover:before:scale-x-100`,
				className,
			)}
		>
			{title}
		</Link>
	);
};
