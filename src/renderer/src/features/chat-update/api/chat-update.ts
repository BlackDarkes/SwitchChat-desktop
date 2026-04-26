import { chatApi, TypeUpdateChatSchema } from "@/entities/chat";
import { queryClient } from "@/libs/query/query-client";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

export const useChatUpdate = (): UseMutationResult<
	void,
	Error,
	{ id: string; data: TypeUpdateChatSchema }
> => {
	return useMutation({
		mutationKey: ["updateChat"],
		mutationFn: async ({
			id,
			data,
		}: {
			id: string;
			data: TypeUpdateChatSchema;
		}) => {
			await chatApi.update(id, data);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["chats"] });
			queryClient.invalidateQueries({ queryKey: ["directChats"] });
			queryClient.invalidateQueries({ queryKey: ["groupChats"] });
			queryClient.invalidateQueries({ queryKey: ["chatById"] });
		},
	});
};
