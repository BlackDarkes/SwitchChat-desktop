import { chatApi } from "@/entities/chat";
import { queryClient } from "@/libs/query/query-client";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

type TypeRemoveFavoriteResponse = void;

export const useRemoveFavorite = (): UseMutationResult<
	TypeRemoveFavoriteResponse,
	Error,
	string
> => {
	return useMutation({
		mutationKey: ["removeFavorite"],
		mutationFn: async (id: string) => {
			await chatApi.removeFavorite(id);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["chatFavorite"] });
			queryClient.invalidateQueries({ queryKey: ["chats"] });
			queryClient.invalidateQueries({ queryKey: ["directChats"] });
			queryClient.invalidateQueries({ queryKey: ["groupChats"] });
		},
	});
};
