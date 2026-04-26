import { JSX } from "react";

export const MessageListDefault = (): JSX.Element => {
	return (
		<div className="flex items-center justify-center h-full text-inactive-color text-[clamp(18px,1.4vw,22px)]">
			<p>Выберите чат, чтобы начать общение</p>
		</div>
	);
};
