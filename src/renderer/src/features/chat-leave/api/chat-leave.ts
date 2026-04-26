import { chatApi } from "@/entities/chat";
import { queryClient } from "@/libs/query/query-client";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

export const useChatLeave = (): UseMutationResult<void, Error, string> => {
	return useMutation({
		mutationKey: ["leaveChat"],
		mutationFn: async (id: string) => {
			await chatApi.leave(id);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["chats"] });
			queryClient.invalidateQueries({ queryKey: ["directChats"] });
			queryClient.invalidateQueries({ queryKey: ["groupChats"] });
			queryClient.invalidateQueries({ queryKey: ["chatById"] });
		},
	});
};
