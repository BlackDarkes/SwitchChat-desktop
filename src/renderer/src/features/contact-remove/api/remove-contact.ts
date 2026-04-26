import { contactApi } from "@/entities/contact";
import { queryClient } from "@/libs/query/query-client";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

export const useContactRemove = (): UseMutationResult<void, Error, string> => {
	return useMutation({
		mutationKey: ["removeContact"],
		mutationFn: async (id: string) => {
			await contactApi.removeContact({ contactId: id });
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["contacts"] });
			queryClient.invalidateQueries({ queryKey: ["searchContacts"] });
			queryClient.invalidateQueries({ queryKey: ["directChats"] });
		},
	});
};
