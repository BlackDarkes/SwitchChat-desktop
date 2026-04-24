import { ChatFavoritePage } from "@/pages/chat-favorite-page/ChatFavoritePage";
import { ChatListPage } from "@/pages/index";
import { cn } from "@/shared/lib/utils";
import { Header } from "@/widgets/header";
import { JSX } from "react";
export const MainLayout = (): JSX.Element => {
	return (
		<main
			className={cn(
				"flex",
				"max-h-dvh h-dvh max-w-screen w-screen",
				"overflow-hidden",
			)}
		>
			<section
				className={cn(
					"shrink-0",
					"w-[clamp(400px,45vw,760px)] bg-primary-bg border-r-2 border-border-color",
					"max-md:w-full",
				)}
			>
				<Header />

				<div className={cn("flex h-full", "max-md:flex-col")}>
					<ChatListPage />

					<div
						className={cn(
							"flex flex-col items-center justify-between",
							"h-[calc(100%-clamp(83px,10vh,86px))] w-full text-primary-color",
							"max-md:h-[calc(100%-170px)]",
						)}
					>
						{/* <ChatIsland /> */}
					</div>
				</div>
			</section>

			<aside
				className={cn(
					"flex flex-col justify-between",
					"w-[max(100%,1160px)] h-dvh bg-accent-bg transition-all duration-300 ",
					"max-md:fixed max-md:top-0 max-md:right-0 max-md:w-full max-md:translate-x-[-105%] max-md:z-600",
					// {
					// 	"max-md:translate-x-0 ": isOpen,
					// },
				)}
			>
				<ChatFavoritePage />
			</aside>
		</main>
	);
};
