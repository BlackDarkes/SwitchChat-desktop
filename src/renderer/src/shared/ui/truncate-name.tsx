import { JSX, ReactNode } from "react";
import { cn } from "../lib/utils";

interface ITruncateNameProps {
	children: ReactNode;
	textSize?: number;
	className?: string;
}

export const TruncateName = ({
	children,
	textSize,
	className,
}: ITruncateNameProps): JSX.Element => {
	return (
		<span
			className={cn(
				"block max-w-full max-h-5.5 truncate",
				textSize && `text-[${textSize}px]`,
				className,
			)}
		>
			{children}
		</span>
	);
};
