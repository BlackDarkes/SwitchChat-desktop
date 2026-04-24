import { chatApi } from "@/entities/chat";
import { queryClient } from "@/libs/query/query-client";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

type TypeAddFavoriteResponse = void;

export const useAddFavorite = (): UseMutationResult<
	TypeAddFavoriteResponse,
	Error,
	string
> => {
	return useMutation({
		mutationKey: ["addFavorite"],
		mutationFn: async (id: string) => {
			await chatApi.addFavorite(id);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["chatFavorite"] });
			queryClient.invalidateQueries({ queryKey: ["chats"] });
			queryClient.invalidateQueries({ queryKey: ["directChats"] });
			queryClient.invalidateQueries({ queryKey: ["groupChats"] });
		},
	});
};
