import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { queryClient } from "@/libs/query/query-client";
import { chatApi, TypeCreateChatSchema } from "@/entities/chat";
import { IChat } from "@/shared/types";

type CreateChatResponse = { chat: IChat; message: string };

export const useCreateChat = (): UseMutationResult<
	CreateChatResponse,
	Error,
	TypeCreateChatSchema
> => {
	return useMutation<CreateChatResponse, Error, TypeCreateChatSchema>({
		mutationKey: ["createChat"],
		mutationFn: async (data: TypeCreateChatSchema) => {
			const res = await chatApi.create(data);
			return res;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["chats"] });
			queryClient.invalidateQueries({ queryKey: ["directChats"] });
			queryClient.invalidateQueries({ queryKey: ["groupChats"] });
		},
	});
};
