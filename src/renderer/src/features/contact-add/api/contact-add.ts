import { contactApi } from "@/entities/contact";
import { queryClient } from "@/libs/query/query-client";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

export const useContactAdd = (): UseMutationResult<void, Error, string> => {
	return useMutation({
		mutationKey: ["addContact"],
		mutationFn: async (contactId: string) => {
			await contactApi.addContact({ contactId });
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["contacts"] });
			queryClient.invalidateQueries({ queryKey: ["searchContacts"] });
			queryClient.invalidateQueries({ queryKey: ["directChats"] });
		},
	});
};
